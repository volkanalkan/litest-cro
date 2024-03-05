// testimonials

var btn = document.getElementsByClassName("button")
var slide = document.getElementById("slide")

btn[1].onclick = function () {
  slide.style.transform = "translateX(0px)"
  for (i = 0; i < 4; i++) {
    btn[i + 1].classList.remove("actv")
  }
  this.classList.add("actv")
}
btn[2].onclick = function () {
  slide.style.transform = "translateX(-800px)"
  for (i = 0; i < 4; i++) {
    btn[i + 1].classList.remove("actv")
  }
  this.classList.add("actv")
}
btn[3].onclick = function () {
  slide.style.transform = "translateX(-1600px)"
  for (i = 0; i < 4; i++) {
    btn[i + 1].classList.remove("actv")
  }
  this.classList.add("actv")
}
btn[4].onclick = function () {
  slide.style.transform = "translateX(-2400px)"
  for (i = 0; i < 4; i++) {
    btn[i + 1].classList.remove("actv")
  }
  this.classList.add("actv")
}
