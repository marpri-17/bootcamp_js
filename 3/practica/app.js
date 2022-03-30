"use strict";
/* 
const booking = {
    count: 0,
    price: 0
}
booking.count = +prompt('Número de noches');
booking.price = +prompt('Precio por noche');
*/

const booking = { count: 5, price: 127.95 };


var totalPriceByReservation = booking.price * booking.count;
console.log('El total de la reserva es de: ' + totalPriceByReservation + '€');
var offerDiscount = 0.2; // 20%
var offerMinimunQuantity = 500;
var discount = totalPriceByReservation > offerMinimunQuantity ? totalPriceByReservation * offerDiscount : 0;
var totalWithDiscount = totalPriceByReservation - discount;

/**
 * Part 2 - Mostrar solo si hay descuento
 */

if (totalPriceByReservation > offerMinimunQuantity && discount > 0) {
    console.log('Con la oferta del 20% a partir de 500€, en total pagarás: ' + `%c${totalWithDiscount} €`, 'font-weight: bold');
} else {
    console.warn('El descuento del 20% aplica a partir de ' + offerMinimunQuantity + '€');
    console.log('El total es de: ' + totalPriceByReservation + '€');
}
/**
 * Opcionales - dos reservas
 */
console.warn('Parte opcional');
/* const booking1 = { count: 3, price: 600 };
const booking2 = { count: 3, price: 600 }; */
const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

// Comparar si dos reservas son iguales.
if (booking1.count === booking2.count && booking1.price === booking2.price) {
    console.log('%cLas dos reservas son iguales', 'color: lime')
}

// Mostrar la suma del número de noches de las dos reservas.
console.log('Entre las dos reservas suman un total de: ' + (booking1.count + booking2.count));

// Comparar dos reservas para mostrar la de mayor número de noches.
if(booking1.count !== booking2.count){
    console.log(booking1.count > booking2.count ? JSON.stringify(booking1) : JSON.stringify(booking2));
} else {
    console.log('Las dos reservas tienen el mismo número de noches')
}
// Ampliar una noche más una reserva.
// Copy for not affect final result
let selectedReservation = Object.assign({}, booking1);

// selectedReservation.count = selectedReservation.count++;
selectedReservation.count++;
selectedReservation.price = Math.floor((selectedReservation.price / (selectedReservation.count - 1)) * selectedReservation.count)
console.log('La reserva ahora es para ' + selectedReservation.count + ' noches por un total de ' + selectedReservation.price + ' €')

// Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).
var discountBooking1 = booking1.price > offerMinimunQuantity ? booking1.price * offerDiscount : 0;
var discountBooking2 = booking2.price > offerMinimunQuantity ? booking2.price * offerDiscount : 0;
if (discountBooking1 > 0 || discountBooking2 > 0) {
    var totalwithDiscountBooking1 = booking1.price - discountBooking1;
    var totalwithDiscountBooking2 = booking2.price - discountBooking2;
    var priceDifference = booking1.price - booking2.price;
    console.log(`La diferencia de precio sin descuento es de ${priceDifference < 0 ? priceDifference *= -1 : priceDifference} €`);
} else {
    var priceDifference = booking1.price - booking2.price;
    console.log(`La diferencia de precio sin descuento es de ${priceDifference < 0 ? priceDifference *= -1 : priceDifference} €`);
}

// Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).
if (discountBooking1 > 0 || discountBooking2 > 0) {
    var totalwithDiscountBooking1 = booking1.price - discountBooking1;
    var totalwithDiscountBooking2 = booking2.price - discountBooking2;
    console.log(`La reserva con mayor precio aplicado descuento es ${totalwithDiscountBooking1 > totalwithDiscountBooking2 ? JSON.stringify(booking1) : JSON.stringify(booking2)}`);
} else {
    console.log(`La reserva con mayor precio sin descuento es ${booking1 < 0 ? priceDifference *= -1 : priceDifference} €`);
}

// Mostrar número de reservas a las que se podrían aplicar descuento.
var counter = 0;
if (booking1.price > offerMinimunQuantity)
    counter++;
if (booking2.price > offerMinimunQuantity)
    counter++;

console.log('De las ofertas actuales se puede aplicar descuento a un total de ' + counter)

// Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
if (counter === 2) {
    console.log('%cTodas con descuento', 'color: lime')
}

// Mostrar la suma del precio total con descuentos de las dos reservas.
if (totalwithDiscountBooking1 > 0 || totalwithDiscountBooking2 > 0) {
    var totalwithDiscountBooking1 = booking1.price - discountBooking1;
    var totalwithDiscountBooking2 = booking2.price - discountBooking2;
    console.log(`El precio de ambas reservas tras descuentos es de ${totalwithDiscountBooking1 + totalwithDiscountBooking2} €`, 'color: blue; font-weight: bold')
} else {
    console.log(`%cEl precio de ambas reservas es de ${booking1.price + booking2.price} €`, 'color: blue; font-weight: bold')
}
