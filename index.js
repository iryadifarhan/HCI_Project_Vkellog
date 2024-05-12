// Drop Down Burgerbar
function dropDown(){
    let declaration = document.styleSheets[0]
        
    const drop = [...declaration.cssRules].find((r) => r.selectorText === "nav #dropDown")
    let body = document.getElementsByTagName("body")

    let x = document.getElementById("dropDown")
    let image = document.getElementById("burgerFoto")
    
    //desain lama//
    // if(drop.style.transform === "scaleY(1)"){
    //     image.src = '/assets/Project (20240410062000).png'
    //     image.style.backgroundColor = "rgba(0,0,0,0)"
    //     // drop.style.setProperty("display","none")
    //     drop.style.setProperty("transform", "scaleY(0)")
    //     drop.style.setProperty("filter","opacity(0.3)")
        
    // }else{
    //     image.src = '/assets/silangPutih.png'
    //     image.style.backgroundColor = "rgba(211,18,69,255)"
    //     image.style.borderRadius = "10px"
    //     // drop.style.setProperty("display","block")
    //     drop.style.setProperty("transform", "scaleY(1)")
    //     drop.style.setProperty("filter","opacity(1)")
        
    // }

    if(drop.style.height === "100px"){
        image.src = '/assets/Project (20240410062000).png'
        image.style.backgroundColor = "rgba(0,0,0,0)"
        drop.style.setProperty("height", "0px")
        
    }else{
        image.src = '/assets/silangPutih.png'
        image.style.backgroundColor = "rgba(211,18,69,255)"
        image.style.borderRadius = "10px"
        drop.style.setProperty("height", "100px")
    }
}
    
// Reference: https://www.youtube.com/watch?v=749ta0nvj8s
// Carousel Main Page
const items = document.querySelectorAll(".slides img")
const bulet = document.querySelectorAll(".slider-nav a")
const slideContainer = document.querySelector(".slides")
let firstImg = null
let slideIdx = 0
let intervalID = null


document.addEventListener("DOMContentLoaded", initSlider)

function changeProductName(){
    if(slideIdx == 0){
        document.getElementById("namaProduk").innerText = "Corn Flakes Original"
    }else if(slideIdx == 1){
        document.getElementById("namaProduk").innerText = "Chocos Whole Grain"
    }else if(slideIdx == 2){
        document.getElementById("namaProduk").innerText = "Extra Cinnamon Granola Cereal"
    }
}

function initSlider(){
    items[slideIdx].classList.add("spotLight")
    bulet[slideIdx].classList.add("active")

    intervalID = setInterval(autoSlider, 5000)
    changeProductName()
}

function showSlide(flag){
    firstImg = slideContainer.querySelectorAll("img")[0]
    firstImg = firstImg.clientWidth

    console.log(slideContainer.scrollLeft)

    if(slideIdx >= items.length){
        slideContainer.scrollLeft = 0
        slideIdx = 0
    }else if(slideIdx < 0){
        slideContainer.scrollLeft += firstImg*2
        slideIdx = items.length - 1 
    }else{
        if(flag == "next"){
            slideContainer.scrollLeft += firstImg
        }else if(flag == "prev"){
            slideContainer.scrollLeft -= firstImg
        }
    }
    
    items.forEach(slide => {slide.classList.remove("spotLight")})
    bulet.forEach(slide => {slide.classList.remove("active")})

    bulet[slideIdx].classList.add("active")
    items[slideIdx].classList.add("spotLight")
    changeProductName()
}   

function checkSlideCondition(){
    if(slideContainer.scrollLeft % slideContainer.querySelectorAll("img")[slideIdx].clientWidth == 0){
        return true
    }
    return false
}

function prevSlide(){
    if(checkSlideCondition()){
        clearInterval(intervalID)
        slideIdx--
        showSlide("prev")
        intervalID = setInterval(autoSlider,5000)
    }
}

function nextSlide(){
    if(checkSlideCondition()){
        clearInterval(intervalID)
        slideIdx++
        showSlide("next")
        intervalID = setInterval(autoSlider,5000)
    }
}

function autoSlider(){
    slideIdx++
    showSlide("next")
}

function discSlider(index){
    clearInterval(intervalID)
    slideIdx = index
    showSlide("check")
    intervalID = setInterval(autoSlider,5000)
}

function scrollCheck(){
    const slides = document.querySelector(".slides") 
    
    let rect = slides.getBoundingClientRect() 
    let indexScroll = null

    let idx_1 = items[0]
    let idx_2 = items[1]
    let idx_3 = items[2]
}

