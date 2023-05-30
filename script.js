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

const imagesImg = [];

images.forEach((element.image) => {
        imagesImg.push(element.image)
});

const carouselElements = document.querySelector("div.img-container");

for ( let i = 0 ; i < images.length ; i++){

    carouselElements.innerHTML += 
    `<img src="./img/${images[i][image]}" alt="">
    <div class="text">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime voluptatem! Voluptas quidem facilis accusamus nulla, libero totam. Aliquam explicabo veniam laboriosam quisquam iusto. Sint magni obcaecati fugiat id voluptate!</p>
    </div>`;

}