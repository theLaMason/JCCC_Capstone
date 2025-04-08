// Variables
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const slidesWrapper = document.querySelector('.slides-wrapper'); // The wrapper of the images
const slideshowContainer = document.getElementById('slideshow-container');
// Left and Right Arrow Buttons
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Event listener for left arrow
leftArrow.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
});

// Event listener for right arrow
rightArrow.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
});



// Clone the first slide and append it to the wrapper to make it seamless
const firstSlide = slides[0].cloneNode(true);
slidesWrapper.appendChild(firstSlide);

// Mouse dragging functionality
let isDragging = false;
let startX;
let currentX;
let moveDistance;

// Function to show slides (used for the sliding transition)
function showSlides() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first image
    // Immediately move to the first image without delay for smooth looping
    slidesWrapper.style.transition = "none"; 
    slidesWrapper.style.transform = `translateX(0%)`;
    }else {
    // Use translateX to slide the images horizontally
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}
  // Force the next transition to be smooth again
  setTimeout(function() {
    slidesWrapper.style.transition = "transform 1s ease"; // Resume smooth transition
  }, 50);
} 

// Mouse events for dragging
slideshowContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slidesWrapper.offsetLeft;
    slideshowContainer.style.cursor = 'grabbing'; // Change cursor to grabbing
});

slideshowContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.pageX - slidesWrapper.offsetLeft;
    moveDistance = startX - currentX;

    if (moveDistance > 50) { // Move left
        slideIndex++;
        startX = currentX;
    } else if (moveDistance < -50) { // Move right
        slideIndex--;
        startX = currentX;
    }

    
    // Adjust the translation based on mouse movement
    slidesWrapper.style.transition = "none"; // Disable smooth transition while dragging
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
});

slideshowContainer.addEventListener('mouseup', () => {
    isDragging = false;
    slideshowContainer.style.cursor = 'grab'; // Change cursor back to grab
    slidesWrapper.style.transition = "transform 1s ease"; // Re-enable smooth transition
});

slideshowContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    slideshowContainer.style.cursor = 'grab'; // Change cursor back to grab if mouse leaves
    slidesWrapper.style.transition = "transform 1s ease"; // Re-enable smooth transition
});
    


// Start slideshow
let slideInterval = setInterval(showSlides, 3000);

// change speed of slideshow on hover
slideshowContainer.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
slideInterval = setInterval(showSlides, 5000); // Change this value for peed
});

// Resume slideshow on mouse out
slideshowContainer.addEventListener('mouseout', function() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 3000);
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

