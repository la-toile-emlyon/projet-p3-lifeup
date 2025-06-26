AOS.init();

let sc = document.querySelector(".inner-scrolling")
sc.style.width = 0+"px"

let doch = document.documentElement.scrollHeight;
let winh = window.innerHeight

window.addEventListener("scroll",(e)=>{
    let taille = (window.scrollY / (doch-winh)) * 100
    sc.style.width = taille + "%"
})

window.addEventListener("resize",(e)=>{
    doch = document.documentElement.scrollHeight;
    winh =window.innerHeight
})


