var big_box = document.getElementById("big_box");
var head_Wz = document.querySelectorAll(".head_wz");
var head = document.getElementById("head");
var header = document.getElementById("header");
var bo = document.getElementById("bo");
var headFx = document.getElementById("headFx");
var headYun = document.getElementById("headYun");
var headVideo = document.getElementById("headVideo");
function myOn() {
  bo.style.display = "block";
  head.style.background = "url(img/背景图.jpg) no-repeat";
  head.style.backgroundSize = "cover";
  headFx.style.display = "none";
  header.style.background = "rgba(0, 0, 0, 0.6)";
  head_wz[0].className = "headwz";
  headYun.style.display = "none";
}
window.onload = function () {
  head_wz[0].className = "headwz";
  headYun.style.display = "none";
  headFx.style.display = "none";
};
function mySee() {
  bo.style.display = "none";
  head.style.background = "none";
  header.style.background = "white";
  headFx.style.display = "block";
  headYun.style.display = "none";
  headVideo.style.display = "none";
  head_wz[0].className = "wz";
}
function myYun() {
  bo.style.display = "none";
  head.style.background = "none";
  header.style.background = "white";
  headFx.style.display = "none";
  headYun.style.display = "block";
  headVideo.style.display = "none";
  head_wz[0].className = "wz";
}
function myVideo() {
  bo.style.display = "none";
  head.style.background = "none";
  header.style.background = "white";
  headFx.style.display = "none";
  headYun.style.display = "none";
  headVideo.style.display = "block";
  head_wz[0].className = "wz";
}
