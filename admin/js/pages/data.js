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
        url: "/admin/controller/data.list.con.php",
        success: function (data) {
            var result = JSON.parse(data);
            var projectNum = result.number;

            //显示项目表格的内容
			//alert("12345");
            if (projectNum == 0) {
                $("#cu-data-table").find("tbody>tr>td").html("暂时没有数据，请添加");
            } else {
                var html = "";
				 //console.log(result.info);
                for (var item in result.info) {
					//alert(item);
                    html += "<tr>" +
                        "<td>" + item + "</td>" +
                        "<td style='max-width: 200px;'>" + result.info[item + ""]['title'] + "</td>" +
                        "<td style='max-width: 200px;'>" + result.info[item + ""]['content'].substring(0, 50) + "</td>" +
                        "<td>" + result.info[item + ""]['create_at'] + "</td>" +
                        "<td>" +
                        "<div class='btn-group' role='group'>" +
                        "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                        "onclick='detailData(" + result.info[item + ""]['did'] + ")' data-toggle='modal' data-target='#detailNewsModal'>details</button>" +
                        "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                        "onclick='deleteData(" + result.info[item + ""]['did'] + ")'>delete</button>" +
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
	
    var title = $("#title");
    var content = $("#content");
    var is_bord = $("#is_bord");
    var is_red = $("#is_red");
	var is_pass = $("#is_pass");

    var form_data = new FormData();
	var myDate= new Date();
	//myDate.toLocaleDateString();
	//var myDate = d.
	//alert('12345');
	//alert(myDate);
    form_data.append('title', title.val());
    form_data.append('content', content.val());
    form_data.append('is_bord', is_bord.val());
	form_data.append('is_red', is_red.val());
	form_data.append('is_pass', is_pass.val());
	form_data.append('create_at', myDate);

    swal({
        title: "确认添加数据",
        type: "info",
        confirmButtonText: "确认添加",
        cancelButtonText: "取消",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {

        $.ajax({
            url: "/admin/controller/data.addItem.con.php",
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
                        confirmButtonText: "返回数据列表",
                        cancelButtonText: "关闭",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true
                    }, function () {
                        location.href = "data.html";
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

    var title = $("#title");
    var content = $("#content");
    var is_bord = $("#is_bord");
    var is_red = $("#is_red");
	var is_pass = $("#is_pass");

    var form_data = new FormData();


    form_data.append('id', id.val());
    form_data.append('title', title.val());
    form_data.append('content', content.val());
    form_data.append('is_bord', is_bord.val());
	form_data.append('is_red', is_red.val());
	form_data.append('is_pass', is_pass.val());

    $.ajax({
        url: "/admin/controller/data.update.con.php",
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
                showNotification("alert-success", "智享数据已修改", "top", "right", "animated fadeInRight", "animated fadeOutRight");
                getDataList();
            } else {
                showNotification("alert-danger", "智享数据修改失败", "top", "right", "animated fadeInRight", "animated fadeOutRight");
            }
        }
    });
});

function detailData(id) {
    $.ajax({
        url: "/admin/controller/data.detail.con.php",
        data: {id: id},
        type: "post",
        success: function (data) {
            var result = JSON.parse(data);
            $("#id").prop("value", result['detail']['did']);
            $("#title").prop("value", result['detail']['title']);
            $("#content").prop("value", result['detail']['content']);
            $("#is_bord").prop("value", result['detail']['is_bord']);
			$("#is_red").prop("value", result['detail']['is_red']);
			$("#is_pass").prop("value", result['detail']['is_pass']);

            
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
            url: "/admin/controller/data.delete.con.php",
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