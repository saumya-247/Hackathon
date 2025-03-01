let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
// Function to show the slide at the specified index
function showSlide(index) {
    // Reset all slides and dots
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

// Show the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Show the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
// Automatically move to the next slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 5000);

showSlide(slideIndex);