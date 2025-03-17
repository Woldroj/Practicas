let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;
const wrapper = document.querySelector('.carrusel-wrapper');
const carruselImages = document.querySelector('.carrusel-images');

// Clonar las imágenes y agregarlas al final para crear el efecto de bucle infinito
function clonacion() {
    images.forEach(img => {
        const clone = img.cloneNode(true); // Clonar cada imagen
        carruselImages.appendChild(clone); // Agregar el clon al final
    });
}

// Mover el carrusel hacia la derecha
function moveNext() {
    clonacion();
    currentIndex++;
    // Actualizar el desplazamiento del carrusel
    updateCarrusel();
}

// Actualizar el desplazamiento del carrusel
function updateCarrusel() {
    const offset = -currentIndex * (images[0].clientWidth + 20); // Ajusta el desplazamiento
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Iniciar el movimiento del carrusel de manera infinita
setInterval(moveNext, 3000); // Deslizar cada 3 segundos