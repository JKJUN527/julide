/**
 * Created by liuyang on 2017/4/24.
 */

//验证登录状态
$.ajax({
    url: "/admin/controller/check.login.php",
    success: function (data) {
        var result = JSON.parse(data);
        if (result.status == CORRECT) {
            //验证登录成功
            getRequestList();
        } else {
            showNotification("alert-danger", errorCode2errorInfo(result.status), "top", "center", "", "");

            setTimeout(function () {
                location.href = "../index.html";
            }, 1000);
        }
    }
});

function getRequestList() {
    $.ajax({
        url: "../controller/request.list.con.php",
        success: function (data) {
            var result = JSON.parse(data);
            var html = "";
            for (var item in result) {
                var id = result[item + ""]['id'];
                html += "<tr>" +
                    "<td>" + id + "</td>" +
                    "<td>" + result[item + ""]['company'] + "</td>" +
                    "<td>" + result[item + ""]['industry'] + "</td>" +
                    "<td>" + result[item + ""]['city'] + "</td>" +
                    "<td>" + result[item + ""]['budget'] + "</td>" +
                    "<td>" +
                    "<div class='btn-group' role='group'>" +
                    "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                    "onclick='detail(" + id + ")' data-toggle='modal' data-target='#detailModal'>details</button>" +
                    "<button type='button' class='btn btn-default btn-xs waves-effect material-icons'" +
                    "onclick='remove(" + id + ")'>delete</button>" +
                    "</div>" +
                    "</td>" +
                    "</tr>";
            }

            $("#cu-request-table").find("tbody").html(html).fadeIn(300);
        }
    })
}

function remove(id) {
    swal({
        title: "删除该需求",
        text: "此操作不能撤销!",
        type: "info",
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        $.ajax({
            url: "../controller/request.remove.con.php",
            data: {id: id},
            type: "post",

            success: function (data) {
                if (data==1) {
                    setTimeout(function () {
                        swal({
                            title: "操作完成",
                            confirmButtonText: "关闭"
                        });
                        getRequestList();
                    }, 500);
                }
            }//success
        });//ajax
    });
}

function detail(id) {
    $.ajax({
        url: "../controller/request.detail.con.php",
        data: {id: id},
        type: "post",
        success: function (data) {
            var result = JSON.parse(data);
            var scale = "";
            switch (result['detail']['scale']) {
                case "1":
                    scale = "500人以下";
                    break;
                case "2":
                    scale = "500-2000人";
                    break;
                case "3":
                    scale = "2000人以上";
                    break;
            }
            $("#company").prop("value", result['detail']['company_name']);
            $("#scale").prop("value", scale);
            $("#industry").prop("value", result['detail']['industry']);
            $("#city").prop("value", result['detail']['city']);
            $("#service").prop("value", result['detail']['service_type']);
            $("#budget").prop("value", result['detail']['budget']);
            $("#create_time").prop("value", result['detail']['create_time']);
        }
    })
}