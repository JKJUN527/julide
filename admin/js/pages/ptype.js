/**
 * Created by liuyang on 2017/4/6.
 */

$.ajax({
    url: "/admin/controller/check.login.php",
    success: function (data) {
        var result = JSON.parse(data);
        if (result.status == CORRECT) {
            //验证登录成功
            getStaffList();
        } else {
            showNotification("alert-danger", errorCode2errorInfo(result.status), "top", "center", "", "");

            setTimeout(function () {
                location.href = "../index.html";
            }, 1000);
        }
    }
});

function getStaffList(){
    $.ajax({
        url: "/admin/controller/staff.list.con.php",
        success: function(data){
            var result = JSON.parse(data);

            var ptypeNum = result.ptypeNum;

            //设置分页
            // ----

            //显示合伙人表格的内容
            if (ptypeNum == 0) {
                $("#cu-staff-table").find("tbody>tr>td").html("暂时没有产品类别");
            } else {
                var html = "";
                for (var item in result.ptype) {
                    if (result.ptype[item + ""]['top'] == 1) {
                        html += "<tr class='success'>";
                    } else {
                        html += "<tr>";
                    }
                    html += "<td>" + item + "</td>" +
                        "<td>" + result.ptype[item + ""]['name'] + "</td>" +
                        "<td>" + result.ptype[item + ""]['desc'] + "</td>" +
                        "<td>" +
                        "<div class='btn-group' role='group'>" +
                        "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                        "onclick='deletePtype(" + item + ")'>delete</button>" +
                        "</div>" +
                        "</td>" +
                        "</tr>";
                }

                $("#cu-staff-table").find("tbody").html(html).fadeIn(300);
            }
        }
    })
}

function deletePtype(id) {
    swal({
        title: "删除该type",
        text: "删除后，该type将不存在。此操作不能撤销!",
        type: "info",
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        $.ajax({
            url: "/admin/controller/staff.delete.con.php",
            data: {id: id},
            type: "post",

            success: function (data) {
                if (data==1) {
                    setTimeout(function () {
                        swal("操作完成");
                        getStaffList();
                    }, 500);
                }
            }//success
        });//ajax
    });
}

$("#add_staff_form").submit(function(event){
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");

    $inputs.prop("disabled", true);

    var name = $("#name");
    var desc = $("#desc");

    var form_data = new FormData();

    form_data.append("name", name.val());
    form_data.append("desc", desc.val());

    $.ajax({
        url: "/admin/controller/staff.add.con.php",
        type: "post",
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        success: function (data) {
            $inputs.prop("disabled", false);
            $('#addStaffModal').modal('hide');
            if (data==1) {
                showNotification("alert-success", "成功添加产品类别", "top", "right", "animated fadeInRight", "animated fadeOutRight");
                getStaffList();
            } else {
                showNotification("alert-danger", "添加失败", "top", "right", "animated fadeInRight", "animated fadeOutRight");
            }
        }
    })
});