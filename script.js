
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselElements = document.querySelector("div.img-container");

images.forEach((images) => {

    carouselElements.innerHTML += 
    `<div class="wrapper">
        <img src="./${images.image}" alt="">
        <div class="text-wrapper">
            <h1 class="title">${images.title}</h1>
            <p class="text">${images.text}</p>
        </div>
    </div>`;

});

//let visibleStuff = document.getElementsByClassName("wrapper").classList.add("visible");

let visibleImgIndex = 1;

document.querySelectorAll("div.wrapper")[visibleImgIndex].classList.add("visible");

const leftButton = document.querySelector("div.button-left");
const rightButton = document.querySelector("div.button-right");

leftButton.addEventListener("click", function(){

    if(visibleImgIndex == 0){
        visibleImgIndex = images.length -1;
    } else {
        visibleImgIndex = visibleImgIndex - 1;
    }

    document.querySelector("div.wrapper.visible").classList.remove("visible");
    document.querySelectorAll("div.wrapper")[visibleImgIndex].classList.add("visible");

})

rightButton.addEventListener("click", function(){

    if(visibleImgIndex == images.length - 1){
        visibleImgIndex = 0;
    } else {
        visibleImgIndex = visibleImgIndex + 1;
    }

    document.querySelector("div.wrapper.visible").classList.remove("visible");
    document.querySelectorAll("div.wrapper")[visibleImgIndex].classList.add("visible");

})