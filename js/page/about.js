/**
 * Created by JKJUN on 2017-12-02.
 */
function about_change(index) {
    var about_tab1 = document.getElementById("about_tab1");
    var about_tab2 = document.getElementById("about_tab2");
    var about_tab3 = document.getElementById("about_tab3");
    var about_info1 = document.getElementById("about_info1");
    var about_info2 = document.getElementById("about_info2");
    var about_info3 = document.getElementById("about_info3");
    if(index == 1){
        about_tab1.setAttribute("class","on");
        about_tab2.setAttribute("class","");
        about_tab3.setAttribute("class","");
        about_info1.style.display="block";
        about_info2.style.display="none";
        about_info3.style.display="none";
    }else if(index == 2){
        about_tab2.setAttribute("class","on");
        about_tab1.setAttribute("class","");
        about_tab3.setAttribute("class","");
        about_info2.style.display="block";
        about_info1.style.display="none";
        about_info3.style.display="none";
    }else{
        about_tab3.setAttribute("class","on");
        about_tab2.setAttribute("class","");
        about_tab1.setAttribute("class","");
        about_info3.style.display="block";
        about_info2.style.display="none";
        about_info1.style.display="none";
    }
}