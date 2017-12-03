var id = getQueryString("id");
if (id === null || id.toString().length < 1) {
    id = 1;
}

$(document).ready(function () {
    $.ajax({
        url: "controller/news.con.php",
        data: {funName:"getNewDetail", id:id},
        type:"get",
        success: function (data) {
            var result = JSON.parse(data);

            var content = result['detail']['content'];
            content = content === null?"无内容":content;
            $(".com-nav-content span").html(content);
        }
    })
});


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}