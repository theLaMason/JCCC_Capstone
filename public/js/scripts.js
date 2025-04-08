// Variables
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const slidesWrapper = document.querySelector('.slides-wrapper'); // The wrapper of the images
const slideshowContainer = document.getElementById('slideshow-container');

// Clone the first slide and append it to the wrapper to make it seamless
const firstSlide = slides[0].cloneNode(true);
slidesWrapper.appendChild(firstSlide);

// Function to show slides (used for the sliding transition)
function showSlides() {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 0; // Reset to the first image
    // Immediately move to the first image without delay for smooth looping
    slidesWrapper.style.transition = "none"; 
    slidesWrapper.style.transform = `translateX(0%)`;
    }
  // Force the next transition to be smooth again
  setTimeout(function() {
    slidesWrapper.style.transition = "transform 1s ease"; // Resume smooth transition
  }, 50);
} else {
    // Use translateX to slide the images horizontally
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}
}
// Start slideshow
let slideInterval = setInterval(showSlides, 3000);

// Pause slideshow on hover
slideshowContainer.addEventListener('mouseover', function() {
    clearInterval(slideInterval);

slideInterval = setInterval(showSlides, 5000); // Change this value for desired speed
});

// Resume slideshow on mouse out
slideshowContainer.addEventListener('mouseout', function() {
    slideInterval = setInterval(showSlides, 5000);
});

// Click on image to open the modal
slides.forEach(slide => {
    slide.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Close the modal
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

