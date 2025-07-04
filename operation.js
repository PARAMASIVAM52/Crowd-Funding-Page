window.onload=function(){
var discover_btn=document.querySelector(".Discover");
var back_book_default=document.querySelector(".toggle-bookmark");
var back_book_change=document.querySelector(".toggle-bookmarked");
var back_btn=document.querySelector(".btn-back");
var reward_btn=document.querySelector(".reward")
var project_screen_block=document.querySelector(".project-screen");
var input_b2=document.querySelector("#Pledge-2");
var input_b3=document.querySelector("#Pledge-3");
var project_b2=document.querySelector("#project-block-2-2");
var project_b3=document.querySelector("#project-block-2-3");
var Continue_btn=document.querySelector(".Continue-th");
var th_block=document.querySelector(".thanks-screen");
var got_btn=document.querySelector("#got-it");


discover_btn.addEventListener("click",function(){
    project_screen_block.style.display='block';
    project_screen_block.style.display='fixed';
});

input_b2.addEventListener("change",function(){
    project_b2.style.display="block";
});

input_b3.addEventListener("change",function(){
    project_b3.style.display="block";
});

Continue_btn.addEventListener("click",function(){
project_screen_block.style.display="none";
th_block.style.display="block";

});

got_btn.addEventListener("click",function(){
    th_block.style.display="none";
    back_book_default.style.display="none";
    back_book_change.style.display="flex";

});

back_btn.addEventListener("click",function(){
    back_book_default.style.display="flex";
    back_book_change.style.display="none";

})
};