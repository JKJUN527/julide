/**
 * Created by JKJUN on 2017-12-02.
 */
function news_change(index) {
    var news_tab1 = document.getElementById("news_tab1");
    var news_tab2 = document.getElementById("news_tab2");
    var news_tab3 = document.getElementById("news_tab3");
    if(index == 1){
        news_tab1.setAttribute("class","on");
        news_tab2.setAttribute("class","");
        news_tab3.setAttribute("class","");
    }else if(index == 2){
        news_tab2.setAttribute("class","on");
        news_tab1.setAttribute("class","");
        news_tab3.setAttribute("class","");
    }else{
        news_tab3.setAttribute("class","on");
        news_tab2.setAttribute("class","");
        news_tab1.setAttribute("class","");
    }
}
function getNewslist() {
    
}