let page=1;
window.onload = (e)=>{
    hideAllPages();
    document.getElementById("page1").hidden=false;
    rainbow();
    document.getElementById("leftButton").onclick=(e)=>{
        changePage(false);
    }
    document.getElementById("rightButton").onclick=(e)=>{
        changePage(true);
    }
}
function changePage(right){
    let pages = document.getElementsByName("page");
    (right)?page++:page--;
    if(page==0)page++;
    if(page>pages.length)page--;
    hideAllPages();
    unhidePage();
}
function hideAllPages(){
    document.getElementsByName("page").forEach((i)=>{i.hidden=true;})  
}
function unhidePage(){
    document.getElementById("page"+page).hidden=false;
}
function rainbow(){
    let header = document.getElementById("header").style;
    header.backgroundImage="linear-gradient(to left, blue, blue, blue, blue, blue, red)"
    header.webkitBackgroundClip="text"
    header.color="transparent"
}
