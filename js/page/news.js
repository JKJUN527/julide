/**
 * Created by JKJUN on 2017-12-02.
 */
var numPerPage = 4;
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
    getNewsList(type);
    // news_change(type);
});

function getNewsList(type) {
    $.ajax({
        url:"controller/news.con.php",
        data:{funName: "getNews", cp:cp, type:type},
        type:"get",
        success: function (data) {
            var result = JSON.parse(data);
            var num = result.newsNum;

            if (num === 0) {
                $("#new-list").html("<p>暂无新闻</p>");
            } else {
                var html = "";
                for (var item in result.news) {
                    var type = result.news[item]['type']
                    html += "<li>" +
                        "<a href=\"./new_info.html?id="+result.news[item+""]['id']+"\">" +
                        "<span>"+result.news[item+""]['title']+"</span>" +
                        "<em>"+result.news[item+""]['created_at']+"</em>" +
                        "</a>" +
                        "</li>";
                }

                $("#new-list").html(html);
            }

            // set pagenation
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
            //设置button属性
            if(type==1){

            }
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
        location.href = "new_list.html?p=" + page+"&type="+type;
}

function prevPage(type) {
    var page = Math.max(cp - 1, 1);
    if (page !== cp)
        location.href = "new_list.html?p=" + page+"&type="+type;
}

function nextPage(type) {
    var page = Math.min(pageNum, cp + 1);
    if (page !== cp)
        location.href = "new_list.html?p=" + page+"&type="+type;
}

function news_change(index,is_getnews) {
    var news_tab1 = document.getElementById("news_tab1");
    var news_tab2 = document.getElementById("news_tab2");
    var news_tab3 = document.getElementById("news_tab3");
    if(index === 0){
        news_tab1.setAttribute("class","on");
        news_tab2.setAttribute("class","");
        news_tab3.setAttribute("class","");
        if(is_getnews){
            getNewsList(0);
        }
    }else if(index === 1){
        news_tab2.setAttribute("class","on");
        news_tab1.setAttribute("class","");
        news_tab3.setAttribute("class","");
        if(is_getnews){
            getNewsList(1);
        }
    }else{
        news_tab3.setAttribute("class","on");
        news_tab2.setAttribute("class","");
        news_tab1.setAttribute("class","");
        if(is_getnews){
            getNewsList(2);
        }
    }
}