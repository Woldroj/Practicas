let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;
const wrapper = document.querySelector('.carrusel-wrapper');
const carruselImages = document.querySelector('.carrusel-images');

// Clone the images to put the first the las one 
function clonacion() {
    images.forEach(img => {
        const clone = img.cloneNode(true); // Clone each images
        carruselImages.appendChild(clone); // Add the images in the end
    });
}

// Move the carousel to the right
function moveNext() {
    clonacion();
    currentIndex++;
    // Upadate the movement
    updateCarrusel();
}

// Function to Update the movement
function updateCarrusel() {
    const offset = -currentIndex * (images[0].clientWidth + 20); // Adjust the movement
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Start the movement 
setInterval(moveNext, 3000); // Slide each 3 seconds

//********Part of filtration************

