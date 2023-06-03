
let hamburger = document.querySelector(".box--hamburger")
let nav = document.querySelector(".box--nav")
let body = document.querySelector("body")
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
hamburger.addEventListener("click",function (event){
    hamburger.classList.toggle("isActive")
    nav.classList.toggle("isVisible")
    body.classList.toggle("isNoScroll")
    if (body.classList.contains("isNoScroll") ){
        body.style.marginRight=scrollbarWidth + 'px'
    } else {
        body.style.removeProperty("margin-right")
    }
})
nav.addEventListener("click",function (event){
    if (body.classList.contains("isNoScroll") ){
        hamburger.classList.toggle("isActive")
        nav.classList.toggle("isVisible")
        body.classList.remove("isNoScroll")
        body.style.removeProperty("margin-right")
    }
})