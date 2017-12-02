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
            for (var item in result.products) {
                var i = 0;
                var html = "";
                var src = "/images/default.png";
                if (result.products[item + ""]["image"] != null && result.products[item + ""]["image"] != "") {
                    src = "/images/products/" + result.products[item + ""]['image'];
                }
                // html = '<li class="clone" aria-hidden="true" style="width: 303.333px; margin-right: 0px; float: left; display: block;"><img src="images/index-content-left-01.png" draggable="false"></li>'+
                //     '<li class="am-active-slide" style="width: 303.333px; margin-right: 0px; float: left; display: block;" class="am-active-slide" data-thumb-alt=""><img src="images/index-content-left-01.png" draggable="false"></li>'+
                //     '<li style="width: 303.333px; margin-right: 0px; float: left; display: block;" class="am-active-slide" data-thumb-alt=""><img src="images/index-content-left-01.png" draggable="false"></li>'+
                //     '<li style="width: 303.333px; margin-right: 0px; float: left; display: block;" class="am-active-slide" data-thumb-alt=""><img src="images/index-content-left-01.png" draggable="false"></li>'+
                //     '<li style="width: 303.333px; margin-right: 0px; float: left; display: block;" class="am-active-slide" data-thumb-alt=""><img src="images/index-content-left-01.png" draggable="false"></li>'+
                //     '<li class="clone" aria-hidden="true" style="width: 303.333px; margin-right: 0px; float: left; display: block;"><img src="images/index-content-left-01.png" draggable="false"></li>'

                // html += '<li><img src="' +src+'" /></li>';
                i++;
                if (i ==1) {
                    // $("#products-img").append(html);
                    // html = "";
                }
            }
            //设置最新新闻
            for (var item in result.news) {
                var i = 0;
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
            for (var item in result.devices) {
                var i = 0;
                var html = "";
                var src = "images/devices/"+result.devices[item]['image'];
                html = "<img src='"+src+"' /><br>"
                $("#device-index").append(html);
            }
        }
    })
}