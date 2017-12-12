var id = getQueryString("id");
if (id === null || id.toString().length < 1) {
    id = 1;
}

$(document).ready(function () {
    getNewsdetail(id);
});

function preNewinfo() {
    newid = getQueryString("id");
    if (newid === null || newid.toString().length < 1) {
        newid = 1;
    }
    newid = newid-1;
    getNewsdetail(newid);
}
function getNewsdetail(newid) {
    $.ajax({
        url: "controller/news.con.php",
        data: {funName:"getNewDetail", id:newid},
        type:"get",
        success: function (data) {
            var result = JSON.parse(data);

            var content = result['detail']['content'];
            content = content === null?"无内容":content;
            $(".com-nav-content span").html(content);
        }
    })
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}