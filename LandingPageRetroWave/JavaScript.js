let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;
const wrapper = document.querySelector('.carrusel-wrapper');
const carruselImages = document.querySelector('.carrusel-images');

// Clone the images to put the first the last one 
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
    const offset = -currentIndex * (images[0].clientWidth + 30); // Adjust the movement
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Start the movement 
setInterval(moveNext, 3000); // Slide each 3 seconds



//********Part of filtration************

$(document).ready(function() {
   

    $('.GamesSection .Games .images').hide();
    // Guarda una copia de la estructura inicial
    const gamesSectionHTML = $('.GamesSection .Games').html();

    function restoreAll() {
        $('.GamesSection .Games').html(gamesSectionHTML); 
        $('.GamesSection .Games .images').hide(); // Ocultar todas las imágenes relacionadas
        $('.back-button').remove(); // Eliminar botón "Volver Atrás"
        $('.GamesSection h2').text('Juegos');
        attachEventHandlers();
    }

    function attachEventHandlers() {
        $('.container-image').click(function() {
            var containerId = $(this).closest('div').attr('id');

            // Elimina todas las imágenes y contenedores de imágenes
            $('.GamesSection .Games .container-image').hide();

            //Parte que me mata
            const allImages = document.querySelectorAll('.GamesSection .Games #' + containerId + ' .images')
            allImages.forEach(img => {
                if(img.classList.contains('.images')) {
                    $('.GamesSection .Games .images').show();
                    img.style.display = 'flex';
                }
            });

            // Cambia el título con la categoría seleccionada
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);

            // Agregar botón "Volver atrás"
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
    }

    attachEventHandlers();
});

//Information

let index = 0;

        function moveSlide(direction) {
            const carousel = document.querySelector('.container-info');
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;

            index += direction;

            if (index < 0) {
                index = totalSlides - 1;
            } else if (index >= totalSlides) {
                index = 0;
            }

            let offset = -index * 100; // Mueve el carrusel
            carousel.style.transform = `translateX(${offset}%)`;
        }
