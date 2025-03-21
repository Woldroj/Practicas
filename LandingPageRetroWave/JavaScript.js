let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;
const wrapper = document.querySelector('.carrusel-wrapper');
const carruselImages = document.querySelector('.carrusel-images');

// Clone the first image to the end, only once at the beginning
function clonacion() {
    const firstImage = images[0];
    const clone = firstImage.cloneNode(true); // Clone the first image
    carruselImages.appendChild(clone); // Add the clone at the end
}

// Move the carousel to the right
function moveNext() {
    currentIndex++;
    if (currentIndex === totalImages) {
        // If we reach the last image, reset to the first image
        setTimeout(() => {
            // Reset the index and move to the first image
            currentIndex = 0;
            updateCarrusel();
        }, 500); // Wait a bit to make sure the transition is smooth
    } else {
        updateCarrusel();
    }
}

// Function to Update the movement
function updateCarrusel() {
    const offset = -currentIndex * (images[0].clientWidth); // Adjust the movement
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Start the movement 
setInterval(moveNext, 3000); // Slide every 3 seconds

// Initially, clone the first image at the start
clonacion();



//********Part of filtration************

$(document).ready(function() {
    $('.GamesSection .Games .imagesRt').hide();
    $('.GamesSection .Games .imagesRc').hide(); // Hide all selected images
    $('.GamesSection .Games .imagesI').hide();
    $('.GamesSection .Games .imagesSt').hide();
    $('.GamesSection .Games .imagesSh').hide();
    $('.GamesSection .Games .imagesAd').hide();
    $('.GamesSection .Games .imagesF').hide();
    $('.GamesSection .Games .imagesT').hide();
    $('.GamesSection .Games .imagesGN').hide();
    // Save a copy of the original structure
    const gamesSectionHTML = $('.GamesSection .Games').html();

    function restoreAll() {
        $('.GamesSection .Games').html(gamesSectionHTML); 
        $('.GamesSection .Games .imagesRt').hide();
        $('.GamesSection .Games .imagesRc').hide(); // Hide all selected images
        $('.GamesSection .Games .imagesI').hide();
        $('.GamesSection .Games .imagesSt').hide();
        $('.GamesSection .Games .imagesSh').hide();
        $('.GamesSection .Games .imagesAd').hide();
        $('.GamesSection .Games .imagesF').hide();
        $('.GamesSection .Games .imagesT').hide();
        $('.GamesSection .Games .imagesGN').hide();
        $('.back-button').remove(); // Remove button "Volver Atras"
        $('.GamesSection h2').text('Juegos');
        attachEventHandlers();
    }

    function attachEventHandlers() {
        $('.container-imageRt').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesRt').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageRc').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesRc').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageI').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesI').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageSt').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesSt').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageSh').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesSh').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageAd').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesAd').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageF').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesF').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageT').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesT').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
            $('<button class="back-button">Volver atras</button>')
                .appendTo('.GamesSection')
                .click(function() {
                    restoreAll(); 
                });
        });
        $('.container-imageGN').click(function() {
            $('.GamesSection .Games .container-imageRt').hide();
            $('.GamesSection .Games .container-imageRc').hide();
            $('.GamesSection .Games .container-imageI').hide();
            $('.GamesSection .Games .container-imageSt').hide();
            $('.GamesSection .Games .container-imageSh').hide();
            $('.GamesSection .Games .container-imageAd').hide();
            $('.GamesSection .Games .container-imageF').hide();
            $('.GamesSection .Games .container-imageT').hide();
            $('.GamesSection .Games .container-imageGN').hide();
            $('.GamesSection .Games .imagesGN').show();
            var categoryName = $(this).find('.container-text p').text();
            $('.GamesSection h2').text('Juegos - ' + categoryName);
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

$(document).ready(function(){

    $('.extends-information p').hide();
    $('.extends-information h4').hide();

    $('#img-Info1').click(function(){
        $('.extends-information .INFO3, .extends-information .info3').fadeOut(300);
        $('.extends-information .INFO2, .extends-information .info2').fadeOut(300);
        $('.extends-information .INFO1, .extends-information .info1').toggle(500);
    });
    $('#img-Info2').click(function(){
        $('.extends-information .INFO1, .extends-information .info1').fadeOut(300);
        $('.extends-information .INFO3, .extends-information .info3').fadeOut(300);
        $('.extends-information .INFO2, .extends-information .info2').toggle(500);
    });
    $('#img-Info3').click(function(){
        $('.extends-information .INFO1, .extends-information .info1').fadeOut(300);
        $('.extends-information .INFO2, .extends-information .info2').fadeOut(300);
        $('.extends-information .INFO3, .extends-information .info3').toggle(500);
    });
});

// Hero Section

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = ''; 
}

function register() {
    let user = document.getElementById("registerUser").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    if (user && email && password) {
        
        localStorage.setItem("user", JSON.stringify({ username: user, email: email, password: password }));

        alert("Registro exitoso. Se ha iniciado sesión automáticamente.");
        document.getElementById("welcomeMessage").innerText = "Bienvenido, " + user;

        hideButtons(); 
        closeModal("registerModal"); 
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPassword").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && user === storedUser.username && password === storedUser.password) {
        alert("Inicio de sesión exitoso.");
        document.getElementById("welcomeMessage").innerText = "Bienvenido, " + storedUser.username;
        
        hideButtons(); 
        closeModal("loginModal"); 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function hideButtons() {
    document.querySelectorAll('.hero-btn').forEach(btn => btn.style.display = 'none');
}

// Menu hamburguesa

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});