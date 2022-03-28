"use strict";
// Hotels
var availableHotels = {
    Barcelo: {
        name: 'Hotel Barceló',
        location: 'Madrid',
        img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/158626455.jpg?k=6a956cffcb64a6fd37b3a6f8a38a53f0f4e8bd27d50b826f23f341a45ea27f42&o=&hp=1'
    },
    Ritz: {
        name: 'Hotel Ritz',
        location: 'Madrid',
        img: 'https://st3.idealista.com/news/archivos/styles/news_detail/public/2020-01/ritz_principal.jpg?sv=lY_5b6GC&itok=rg0OlBfF'
    },
    'NH Aranjuez': {
        name: 'NH Collection Palacio de Aranjuez',
        location: 'Aranjuez, Madrid',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/21/ca/1b/e1/nh-collection-palacio.jpg'
    }
}

// Stars ranking template
var starRanking = {
    1:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}


// get review display user preferences
var isAnonimousReview = confirm('¿Quiere que su reseña sea anónima?');
var userReview = prompt('Puntue este hotel de 1 a 5 estrellas');
var selectedHotel = prompt("¿Qué hotel desea puntuar: 'Barcelo', 'Ritz' o 'NH Aranjuez'?");


// DOM
var anonimousReviewCheck = document.getElementById('anonimous-review-check');

var rankingElement = document.getElementById('stars-ranking')
    // Hotel desc
var nameHotelContainer = document.getElementById('hotel-name');
var locationHotelContainer = document.getElementById('hotel-location');
var imageHotelElement = document.getElementById('hotel-picture');


// Set values
nameHotelContainer.innerHTML = availableHotels[selectedHotel].name;
locationHotelContainer.innerHTML = "Ubicado en " + availableHotels[selectedHotel].location;
imageHotelElement.src = availableHotels[selectedHotel].img;

anonimousReviewCheck.checked = isAnonimousReview;
rankingElement.innerHTML = starRanking[userReview]; // Add space between star and number