/**
 * Created by JKJUN on 2017-12-02.
 */
var numPerPage = 12;
var pageNum = 1;
var cp = getQueryString("p");
var type = getQueryString("type");

if (cp === null || cp.toString().length < 1) {
    cp = 1;
}
if (type === null || type.toString().length < 1) {
    type = 0;
}

$(document).ready(function () {
    getDeviceIndex(type);
});

function getDeviceIndex(type) {
    $.ajax({
        url:"controller/products.con.php",
        data:{funName: "getDevices", cp:cp, type:type},
        type:"get",
        success: function (data) {
            var result = JSON.parse(data);
            var num = result.devicesNum;
            // console.log(result);
            if (num === 0) {
                $("#case-list").html("<p>暂无设备</p>");
            } else {
                var html = "";
                for (var item in result.devices) {
                    var type = result.devices[item]['type'];
                    var src = "/images/devices/default.png";
                    if (result.devices[item + ""]["image"] != null) {
                        src = "/images/devices/" + result.devices[item + ""]["image"];
                    }
                    html += "<div class='am-u-sm-6 am-u-md-4 am-u-lg-3'>" +
                        "<div class='case-list-item '>" +
                        "<a>" +
                        "<image src='"+src+"' />" +
                        "<span>"+result.devices[item+""]['title'] +
                        "</span>" +
                        "</a>" +
                        "</div>"+
                        "</div>";
                }

                $("#case-list").html(html);
            }

            //set pagenation
            if (num > 0) {
                page = "";
                pageNum = Math.ceil(num / numPerPage);
                var page = "<a onclick=\"prevPage("+type+")\"><<</a>"; //上一页
                for (var i = 1; i <= pageNum; i++) {
                    if (i === cp) {
                        page += "<a class='on' onclick='goPage("+i+","+type+")'>" + i + "</a>";
                    } else {
                        page += "<a class='num' onclick='goPage("+i+","+type+")'>" + i + "</a>";
                    }
                }
                page += "<a onclick=\"nextPage("+type+")\">>></a>"; //下一页
                $("#page-list").html(page);
            }else{
                $("#page-list").empty();
            }
            //设置产品分类
            var typelist = "";
            for (var item in result.type) {
                if(result.type[item]['id'] == type){
                    typelist += "<li class ='on' name='devicetype'><a onclick='type_change(this,"+type+");'>"+result.type[item+""]['name']+
                                "</a></li>";
                }else{
                    typelist += "<li name='devicetype'><a onclick=\'type_change(this,"+result.type[item]['id']+");\'>"+result.type[item+""]['name']+"</a></li>";
                }
            }
            $("#device-type").html(typelist);
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

function type_change(self,index) {
    var typelist = document.getElementsByName("devicetype");
    //查询数据库
    getDeviceIndex(index);
    for(var i=0;i<typelist.length;i++)//这里是length还是count记不清了
    {
        typelist[i].setAttribute("class","");
    }
    self.parentNode.setAttribute("class","on");

    // if(index === 0){
    //     news_tab1.setAttribute("class","on");
    //     news_tab2.setAttribute("class","");
    //     news_tab3.setAttribute("class","");
    //
    // }else if(index === 1){
    //     news_tab2.setAttribute("class","on");
    //     news_tab1.setAttribute("class","");
    //     news_tab3.setAttribute("class","");
    //     if(is_getnews){
    //         getNewsList(1);
    //     }
    // }else{
    //     news_tab3.setAttribute("class","on");
    //     news_tab2.setAttribute("class","");
    //     news_tab1.setAttribute("class","");
    //     if(is_getnews){
    //         getNewsList(2);
    //     }
}