// Variables 
let slideIndex= 0;
const slides = document.querySelectorAll ('.slide');
const modal = document.getElementById ('modal');
const modalImg= document.getElementById('modal-img');
const closeModal= document.getElementById('close-modal');
//==========
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
slideshowContainer.addEventListener('mouseover', function(){
    clearInterval(showSlides, );
});
slideshowContainer.addEventListener('mouseout', function(){
    clearInterval(showSlides,3000);
});

//Click on image to open the modual 
slides.forEach(slide =>{
    slide.addEventListener('click', function(){
        modal.style.display= "flex";
        modalImg.src = this.src;
        container.style.justifyContent = 'center';
    });
});

//Close the modual
closeModal.addEventListener('click', function(){
    modal.style.display = "none";
});

 



