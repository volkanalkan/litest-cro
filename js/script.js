// navbar scroll

const header = document.querySelector("header")
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50)
})

const dropdown = document.querySelector("ul.dropdown")
window.addEventListener("scroll", function () {
  dropdown.classList.toggle("sticky-drop", window.scrollY > 50)
})

// hamburger

let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
  menu.classList.toggle("bx-x")
  navlist.classList.toggle("open")
}

// scroll

let progress = document.getElementById("progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100
  progress.style.height = progressHeight + "%"
}
