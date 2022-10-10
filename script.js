let featuresBtns = document.querySelectorAll('.features-btns button')
let bookmarkingBtn = document.querySelector('.bookmarking-btn')
let searchingBtn = document.querySelector('.searching-btn')
let sharingBtn = document.querySelector('.sharing-btn')
let featuresTitle = document.querySelector('.features-text h2')
let featuresDesc = document.querySelector('.features-text p')
let featuresImg = document.querySelector('.features-img img')

function changeFeatures(featureBtn,featureTitle,featureDesc,featureImg) {
    featureBtn.addEventListener('click',e=>{
        featuresBtns.forEach(btn =>{
            btn.id = ''
        })
    
        featureBtn.id = 'active'
    
        featuresTitle.innerText = featureTitle
        featuresDesc.innerText = featureDesc
        featuresImg.src = featureImg
    })
}
changeFeatures(bookmarkingBtn,'Bookmark in one click',`Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,'images/illustration-features-tab-1.svg')

changeFeatures(searchingBtn,'Intelligent search',`Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,'images/illustration-features-tab-2.svg')

changeFeatures(sharingBtn,'Share your bookmarks',`Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,'images/illustration-features-tab-3.svg')

let questionImg = document.querySelectorAll('.question img')
let questionText = document.querySelectorAll('.question h4')

function openCloseQuestions(btn) {
    btn.forEach(q=>{
        q.addEventListener('click',e=>{
            q.parentElement.classList.toggle('show-answer')
        })
    })
}
openCloseQuestions(questionText)
openCloseQuestions(questionImg)

let emailInput = document.querySelector('.email-input')
let emailBtn = document.querySelector('.email-submit-btn')
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

emailBtn.addEventListener('click',e=>{
    if(!emailInput.value.match(pattern)){
        emailInput.id = 'error'
        e.preventDefault()
    }else{
        emailInput.id = ''
    }
})


let menu = document.querySelector('nav div')
let menuBtn = document.querySelector('.menu-btn')


menuBtn.addEventListener('click',e=>{
    if(menu.className == ''){
        menu.classList.add('show-sidebar')
        menuBtn.src = 'images/icon-close.svg'
        menuBtn.style.filter = 'brightness(1000%)'
        document.querySelector('.logo').src = './images/logo-bookmark.png'
    }else{
        menu.classList.remove('show-sidebar')
        menuBtn.src = 'images/icon-hamburger.svg'
        menuBtn.style.filter = 'brightness(100%)'
        document.querySelector('.logo').src = './images/logo-bookmark.svg'
    }
})


if(window.innerWidth < 700){
    menuBtn.src = 'images/icon-hamburger.svg'
}
