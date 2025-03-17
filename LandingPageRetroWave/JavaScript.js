let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;
const wrapper = document.querySelector('.carrusel-wrapper');
const carruselImages = document.querySelector('.carrusel-images');

// Clonar las imágenes y agregarlas al final para crear el efecto de bucle infinito
images.forEach(img => {
    const clone = img.cloneNode(true); // Clonar cada imagen
    carruselImages.appendChild(clone); // Agregar el clon al final
});

// Mover el carrusel hacia la derecha
function moveNext() {
    currentIndex++;

    // Si llegamos al final de las imágenes originales, reiniciamos el índice
    if (currentIndex >= totalImages) {
        currentIndex = 0;

        // Mover el carrusel al principio sin transición
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(0)`;

        // Forzar un reflujo para aplicar el cambio
        wrapper.offsetHeight;

        // Reactivar la transición
        wrapper.style.transition = 'transform 0.5s ease-in-out';
    }

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