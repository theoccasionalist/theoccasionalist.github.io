//Navigation Listeners
var butt = document.querySelector('.button');
var div = document.querySelector('.dropdiv');
butt.addEventListener('mouseenter', function () { div.style.display = "block"}, false);
div.addEventListener('mouseleave', function () {
  div.style.display = "none"}, false);

//Carousel Function
var index = 0;
carousel();
function carousel() {
    var pics = document.querySelectorAll(".pics2");
    var i;

    for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none"; 
    }

    index++;
    
    if (index > pics.length) {
    	index = 1;
    } 

    pics[index-1].style.display = "block";

    setTimeout(carousel, 2000);
}

//Projects Collapse and Expand?
var vpb = document.querySelector('#vpb');
var vpd = document.querySelector('#vpd');
vpb.addEventListener('mouseenter', function () {vpd.style.display = 'block'}, false);
vpb.addEventListener('mouseleave', function () {
  vpd.style.display = "none"}, false);

var rb = document.querySelector('#rb');
var rd = document.querySelector('#rd');
rb.addEventListener('mouseenter', function () {rd.style.display = 'block'}, false);
rb.addEventListener('mouseleave', function () {
  rd.style.display = "none"}, false);

var sb = document.querySelector('#sb');
var sd = document.querySelector('#sd');
sb.addEventListener('mouseenter', function () {sd.style.display = 'block'}, false);
sb.addEventListener('mouseleave', function () {
  sd.style.display = "none"}, false);

var db = document.querySelector('#db');
var dd = document.querySelector('#dd');
db.addEventListener('mouseenter', function () {dd.style.display = 'block'}, false);
db.addEventListener('mouseleave', function () {
  dd.style.display = "none"}, false);