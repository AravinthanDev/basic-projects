var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
for(tablink of tablinks){
tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
tabcontent.classList.remove("active-content");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-content");
}

window .addEventListener("scroll",function(){
var header = document.querySelector("header");
header.classList.toggle("stickey", window.scrollY > 0);

})