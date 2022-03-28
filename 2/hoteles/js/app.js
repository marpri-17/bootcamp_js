"use strict";

var hotelDescription = {
    name: '',
    location: ''
}

hotelDescription.name = 'Hotel ' + prompt('Introduce el nombre del hotel');
hotelDescription['location'] = prompt('Introduce la ubicación del hotel')

// DOM Elements
var nameHotelContainer = document.getElementById('hotel-name');
var locationHotelContainer = document.getElementById('hotel-location');

nameHotelContainer.innerHTML = hotelDescription.name;
locationHotelContainer.innerHTML = hotelDescription.location;

