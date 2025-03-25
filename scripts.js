// Variables 
let slideIndex= 0;
const slides = document.querySelectorAll ('.slide');
const modual = document.getElementById ('modual');
const modualImg= document.getElementById('modual-img');
const closeModual= document.getElementById('close-modual');

//Functions
function showSlides() {
    for (let i = 0; i <slides.length; i++) {
       slides[i].style.display= "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
}

//Start slideshow
setInterval (showSlides, 3000);

//Pause slideshow on hover 
const slideshowContainer = document.getElementById('slideshow-container');
