//Navigation Listeners
var butt = document.querySelector('.button');
var div = document.querySelector('.dropdiv');
butt.addEventListener('mouseenter', function () { div.style.display = "block"}, false);
div.addEventListener('mouseleave', function () {
  div.style.display = "none"}, false);
window.addEventListener('click', function () {
  div.style.display = "none"}, false);

//Modal Listeners 1
var mButt = document.querySelector(".m-butt");
var modal = document.querySelector(".modal");
var mCont = document.querySelector(".modal-content");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

mButt.addEventListener("click", toggleModal);
mCont.addEventListener("mouseleave", toggleModal);



