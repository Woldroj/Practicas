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
    const offset = -currentIndex * (images[0].clientWidth + 20); // Adjust the movement
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Start the movement 
setInterval(moveNext, 3000); // Slide each 3 seconds




//********Part of filtration************

$(document).ready(function() {
    
    const allImages = document.querySelectorAll('.GamesSection .Games img');
    allImages.forEach(img => {
        if (!img.classList.contains('btn')) {
            img.style.display = 'none'; // Ocultar las imágenes sin la clase 'btn'
        }
    });
    // Guardar una copia de toda la estructura HTML de .Games
    const gamesSectionHTML = $('.GamesSection .Games').html();

    // Función para restaurar todo a su estado original
    function restoreAll() {
        $('.GamesSection .Games').html(gamesSectionHTML); // Restaurar la estructura HTML original
        $('.back-button').remove(); // Eliminar el botón "Volver atrás"
        $('.GamesSection h2').text('Juegos'); // Restaurar el texto del h2
        attachEventHandlers(); // Volver a asignar los eventos de clic a los botones
    }

    // Función para asignar los eventos de clic a los botones
    function attachEventHandlers() {
        $('.container-image').click(function() {
            // Obtener el id del contenedor padre del contenedor de imagen clickeado
            var containerId = $(this).closest('div').attr('id');

            // Ocultar todas las imágenes y contenedores de texto
            $('.GamesSection .Games img, .GamesSection .Games .container-image').remove();

            // Mostrar solo las imágenes dentro del contenedor correspondiente, excepto la que tiene la clase .btn
            $('#' + containerId + ' img').not('.btn').each(function() {
                $(this).clone().appendTo('.GamesSection .Games'); // Clonar y agregar cada imagen
            });

            allImages.forEach(img => {
                if (img.classList.contains('#' + containerId + ' img')) {
                    img.style.display = 'flex';
                }
            });

            // Cambiar el texto del h2 dentro del div .GamesSection
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);

            // Agregar el botón "Volver atrás"
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); // Restaurar todo al hacer clic en el botón
                });
        });
    }

    // Asignar los eventos de clic a los botones al cargar la página
    attachEventHandlers();
});