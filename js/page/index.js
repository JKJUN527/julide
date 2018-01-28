/**
 * Created by JKJUN on 2017-12-02.
 * 获取首页显示内容、产品中心6张轮播图、新闻中心6个最新新闻、设备展示2张设备图
 */

$(document).ready(function () {
    getIndex();
});

function getIndex() {
    $.ajax({
        url: "/controller/index.con.php",
        data: {funName: "getIndex"},
        type: "get",
        success: function (data) {
            var result = JSON.parse(data);
            //设置产品中心图
            var i = 1;
            for (var item in result.products) {
                var html = "";
                console.log(result.products[item]["image"]);
                var src = "/images/products/default.png";
                if (result.products[item + ""]["image"] != null && result.products[item + ""]["image"] != "") {
                    src = "http://www.julidewj.com/images/products/" + result.products[item + ""]['image'];
                }
                id = "products-index"+i;
                $('#'+id).prop('src',src);
                if(i++>=3){
                    break;
                }
            }
            //设置最新新闻
            var i = 0;
            for (var item in result.news) {
                var html = "";
                //<li><a href="#"><span>热看LED产业，组建光电技术公司激流扬帆 </span><em>2017-4-6</em></a></li>
                title = result.news[item+'']['title'];
                time = result.news[item+'']['created_at'];
                html = '<li><a href="new_info.html"><span>'+title+'</span><em>'+time+'</em></a></li>';
                i++;
                if (i <=6) {
                     $("#news-hotest").append(html);
                     html = "";
                }
            }
            //设置首页设备图
            var i = 0;
            for (var item in result.devices) {
                var html = "";
                var src = "/images/devices/default.png";
                if (result.devices[item + ""]["image"] != null || result.devices[item + ""]["image"] != "") {
                    src = "/images/devices/" + result.devices[item + ""]["image"];
                }
                html = "<img src='"+src+"'" + " style= 'width: 300px;height: 300px;' /><br>";
                $("#device-index").append(html);
            }
        }
    })
}