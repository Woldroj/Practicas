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
            img.style.display = 'none'; // Hide images without the class btn
        }
    });
    // Save a copy of the structure
    const gamesSectionHTML = $('.GamesSection .Games').html();

    // Function to restore all
    function restoreAll() {
        $('.GamesSection .Games').html(gamesSectionHTML); 
        $('.back-button').remove(); // Delete "Volver Atras" button
        $('.GamesSection h2').text('Juegos'); 
        attachEventHandlers(); 
    }

    // Function to asign again the buttons to all the images etc
    function attachEventHandlers() {
        $('.container-image').click(function() {
            
            var containerId = $(this).closest('div').attr('id');

            
            $('.GamesSection .Games img, .GamesSection .Games .container-image').remove();

            //Show images that are inside same id that the btn and show all except the button
            $('#' + containerId + ' img').not('.btn').each(function() {
                $(this).clone().appendTo('.GamesSection .Games'); 
            });

            allImages.forEach(img => {
                if (img.classList.contains('#' + containerId + ' img')) {
                    img.style.display = 'flex';
                }
            });

            
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);

            // Add the button "Volver Atras"
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
    }

    
    attachEventHandlers();
});