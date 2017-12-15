/**
 * Created by JKJUN on 2017-12-02.
 */
var id = getQueryString("id");

if (id === null || id.toString().length < 1) {
    id = 1;
}

$(document).ready(function () {
    getProductDetail();
});

function getProductDetail() {
    $.ajax({
        url:"controller/products.con.php",
        data:{funName: "getProductDetail", id:id},
        type:"get",
        success: function (data) {
            var result = JSON.parse(data);
            var src = "/images/products/default.png";
            if (result.detail["image"] != null) {
                src = "/images/products/" + result.detail["image"];
            }
            //设置产品详细信息
            $("#product_title").html(result.detail['title']);
            $("#detail_name").html(result.detail['title']);
            $("#detail_model").html(result.detail['model']);
            $("#detail_material").html(result.detail['material']);
            $("#detail_temperature").html(result.detail['temperature']);
            $("#detail_describe").html(result.detail['description']);
            var image = "";
            image = "<img src=\""+src+"\" >";
            $("#detail_image").html(image);

            //设置产品分类
            var typelist = "";
            for (var item in result.type) {
                var type = result.type[item]['id'];
                if(type == result.detail['type']){
                    typelist += "<li class ='on' name='typelist'><a onclick='type_change("+type+");'>"+result.type[item+""]['name']+
                                "</a></li>";
                }else{
                    typelist += "<li name='typelist'><a onclick=\'type_change("+type+");\'>"+result.type[item+""]['name']+"</a></li>";
                }
            }
            $("#type-list").html(typelist);
        }
    })
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}

function goPage(page,type) {
    if (page !== cp)
        location.href = "product_list.html?p=" + page+"&type="+type;
}

function prevPage(type) {
    var page = Math.max(cp - 1, 1);
    if (page !== cp)
        location.href = "product_list.html?p=" + page+"&type="+type;
}

function nextPage(type) {
    var page = Math.min(pageNum, cp + 1);
    if (page !== cp)
        location.href = "product_list.html?p=" + page+"&type="+type;
}

function type_change(type) {
    // var typelist = document.getElementsByName("typelist");
    //查询数据库
    //
    // for(var i=0;i<typelist.length;i++)//这里是length还是count记不清了
    // {
    //     typelist[i].setAttribute("class","");
    // }
    // self.parentNode.setAttribute("class","on");
    self.location='product_list.html?cp=1 &type='+type;
}