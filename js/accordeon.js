document.querySelectorAll(".circle--small").forEach(function (el){
    el.addEventListener("click",function (){
        let img = el.parentNode.querySelector(".img")
        let invisible = el.parentNode.parentNode.querySelector(".box--accordeon-invisible-part")
        img.classList.toggle('img--plus')
        img.classList.toggle('img--minus')
        invisible.classList.toggle('isVisible')
    })
})