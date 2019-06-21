// class Carousel {

// }

// let carousel = document.querySelector();

// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */

// Current index for slides
var slideIndex = 1;
showSlides(slideIndex);

// change slide
function plusSlides(n) {
    // console.log('plus slides called with n of:' + n)
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".carousel img");
    // console.log(slides);
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// set event listener for left button
const leftButton = document.querySelector('.left-button');
// console.log(leftButton);
leftButton.addEventListener('click', () => plusSlides(-1));

// set event listener for right button
const rightButton = document.querySelector('.right-button');
// console.log(rightButton);
rightButton.addEventListener('click', () => plusSlides(1));


