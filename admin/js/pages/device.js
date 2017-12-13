/**
 * Created by liuyang on 2017/3/19.
 */

//验证登录状态
$.ajax({
    url: "/admin/controller/check.login.php",
    success: function (data) {
        var result = JSON.parse(data);
        if (result.status == CORRECT) {
            //验证登录成功
            getDataList();
        } else {
            showNotification("alert-danger", errorCode2errorInfo(result.status), "top", "center", "", "");

            setTimeout(function () {
                location.href = "../index.html";
            }, 1000);
        }
    }
});

function getDataList() {
    $.ajax({
        url: "/admin/controller/device.list.con.php",
        success: function (data) {
            var result = JSON.parse(data);
            var projectNum = result.number;

            //显示项目表格的内容
			//alert("12345");
            if (projectNum == 0) {
                $("#cu-data-table").find("tbody>tr>td").html("暂时没有设备，请添加");
            } else {
                var html = "";
				 console.log(result.type['1']['name']);
                for (var item in result.devices) {
					// type = result.devices[item]['type']
                    var type = result.type[result.devices[item]['type']]['name'];
                    html += "<tr>" +
                        "<td>" + item + "</td>" +
                        "<td style='max-width: 200px;'>" + type + "</td>" +
                        "<td style='max-width: 200px;'>" + result.devices[item + ""]['title'] + "</td>" +
                        "<td style='max-width: 200px;'>" + result.devices[item + ""]['description'].substring(0, 50) + "</td>" +
                        "<td>" + result.devices[item + ""]['created_at'] + "</td>" +
                        "<td>" +
                        "<div class='btn-group' role='group'>" +
                        "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                        "onclick='detailData(" + result.devices[item + ""]['id'] + ")' data-toggle='modal' data-target='#detailNewsModal'>details</button>" +
                        "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                        "onclick='deleteData(" + result.devices[item + ""]['id'] + ")'>delete</button>" +
                        "</div>" +
                        "</td>" +
                        "</tr>";
                }

                $("#cu-data-table").find("tbody").html(html).fadeIn(300);
            }

        }
    });
}

$("#add_data_form").submit(function (event) {
	
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
   // $inputs.prop("disabled", true);

    var image = $("#image");
    var dname = $("#dname");
    var content = $("#content");
    var type = $("select[name='type']");

    var form_data = new FormData();
    var image__file = image.prop("files")[0];

    if (image__file == undefined) {
        form_data.append('image-flag', 0);
    } else if (image__file.size > 5242880) {
        $("#image-error").html("图片不能大于5MB");

        $inputs.prop("disabled", false);
        image.parents('.form-line').addClass('error');
        return false;
    } else {
        form_data.append('image-flag', 1);
        form_data.append('image', image__file);
    }
    form_data.append('dname', dname.val());
    form_data.append('content', content.val());
    form_data.append('type', type.val());

    swal({
        title: "确认添加设备",
        type: "info",
        confirmButtonText: "确认添加",
        cancelButtonText: "取消",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {

        $.ajax({
            url: "/admin/controller/device.addItem.con.php",
            type: "post",
            dataType: 'text',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            success: function (data) {
                $inputs.prop("disabled", false);
                if (data == 1) {
                    swal({
                        title: "添加成功",
                        type: "info",
                        confirmButtonText: "返回设备列表",
                        cancelButtonText: "关闭",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true
                    }, function () {
                        location.href = "device.html";
                    });
                } else {
                    swal("添加失败");
                }

            }
        });
    });
});

$("#update_data_form").submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");

    var id = $("#id");

    if (id.val() == "") {
        showNotification("alert-danger", "发生错误", "top", "right", "animated fadeInRight", "animated fadeOutRight");
        return false;
    }
    $inputs.prop("disabled", true);

    var image = $("#image");
    var dname = $("#dname");
    var content = $("#content");
    var type = $("select[name='type']");

    var form_data = new FormData();
    var image__file = image.prop("files")[0];

    if (image__file == undefined) {
        form_data.append('image-flag', 0);
    } else if (image__file.size > 5242880) {
        $("#image-error").html("图片不能大于5MB");

        $inputs.prop("disabled", false);
        image.parents('.form-line').addClass('error');
        return false;
    } else {
        form_data.append('image-flag', 1);
        form_data.append('image', image__file);
    }

    form_data.append('id', id.val());
    form_data.append('dname', dname.val());
    form_data.append('content', content.val());
	form_data.append('type', type.val());

    $.ajax({
        url: "/admin/controller/device.update.con.php",
        type: "post",
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        success: function (data) {
            $inputs.prop("disabled", false);
            $("#detailNewsModal").modal('hide');
            var result = JSON.parse(data);
            if (result == 1) {
                showNotification("alert-success", "设备数据已修改", "top", "right", "animated fadeInRight", "animated fadeOutRight");
                getDataList();
            } else {
                showNotification("alert-danger", "设备修改失败", "top", "right", "animated fadeInRight", "animated fadeOutRight");
            }
        }
    });
});

function detailData(id) {
    $.ajax({
        url: "/admin/controller/device.detail.con.php",
        data: {id: id},
        type: "post",
        success: function (data) {
            var result = JSON.parse(data);
            var imgsrc ="../../images/devices/"+result['detail']['image'];
            $("#id").prop("value",result['detail']['id']);
            $("#dname").prop("value",result['detail']['title']);
            $("#content").prop("value",result['detail']['description']);
            $("#img").prop("src",imgsrc);
            var html = "";
            //console.log(result.info);
            for (var item in result.type) {
                // alert(result.products[item]);
                var type = result.type[result['detail']['type']]['name'];
                if(item == result['detail']['type']){
                    html += "<option selected='selected' value='"+item+"'>"+result.type[item]['name']+"</option>";
                }else{
                    html += "<option value='"+item+"'>"+result.type[item]['name']+"</option>";
                }
            }
            $("#type").html(html);

        }
    })
}

function deleteData(id) {
    swal({
        title: "删除数据",
        text: "此操作不能撤销!",
        type: "info",
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        $.ajax({
            url: "/admin/controller/device.delete.con.php",
            data: {id: id},
            type: "post",

            success: function (data) {
                if (data == 1) {
                    setTimeout(function () {
                        swal("操作完成");
                        getDataList();
                    }, 500);
                }
            }//success
        });//ajax
    });
}