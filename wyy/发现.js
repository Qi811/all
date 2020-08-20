var im = document.querySelectorAll("#im");
var ddli = document.querySelectorAll("#ddli");
var ddul = document.getElementById("ddul");
var headfx = document.getElementById("headfx");
var num = 0;
im[0].style.display = "block";
ddli[0].style.background = "gray";
function ChangImg() {
  num++;
  if (num >= im.length) {
    num = 0;
  }
  for (var i = 0; i < im.length; i++) {
    im[i].style.display = "none";
    ddli[i].style.background = "#eeeeee";
  }
  im[num].style.display = "block";
  ddli[num].style.background = "gray";
}
setInterval(() => {
  ChangImg();
}, 4000);
im.onscroll = function () {
  console.log("---");
};
window.onscroll = function () {};
