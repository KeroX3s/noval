let stars = document.getElementById("stars1");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");

let nouvil = document.querySelector(".nouvil");

let section = document.querySelector(".main");
window.onscroll = function () {
  let value = scrollY;
  // console.log(value);

  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.2 + "px";
  river5.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  nouvil.style.fontSize = value + "px";
  nouvil.style.position = "fixed";

  if (scrollY >= 50) {
    nouvil.style.fontSize = 50 + "px";
    if (scrollY >= 428) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }

    if (scrollY >= 67) {
      section.style.background = "linear-gradient(#376281,#10001f)";
    } else {
      section.style.background = "linear-gradient(#200016,#10001f)";
    }
  }
};
