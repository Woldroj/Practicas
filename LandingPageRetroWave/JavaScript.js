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
        // Show Retro Games
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

            $('#Contra').click(function(){
                $('#Pacman').fadeOut();
                $('#DonkyKong').fadeOut();
                $('.Games-BoxCtr, .Games-BoxCtr p').fadeIn();
            });

            $('#Pacman').click(function(){
                $('#Contra').fadeOut();
                $('#DonkyKong').fadeOut();
                $('.Games-BoxPac, .Games-BoxPac p').fadeIn();
            });

            $('#DonkyKong').click(function(){
                $('#Contra').fadeOut();
                $('#Pacman').fadeOut();
                $('.Games-BoxDK, .Games-BoxDK p').fadeIn();
            });
        });

        

        // Show Racing Games
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

                $('#F1').click(function(){
                    $('#GranTurismo').fadeOut();
                    $('#MarioKart').fadeOut();
                    $('#NeedForSpeed').fadeOut();
                    $('.Games-BoxF1, .Games-BoxF1 p').fadeIn();
                });

                $('#GranTurismo').click(function(){
                    $('#F1').fadeOut();
                    $('#MarioKart').fadeOut();
                    $('#NeedForSpeed').fadeOut();
                    $('.Games-BoxGT, .Games-BoxGT p').fadeIn();
                });

                $('#MarioKart').click(function(){
                    $('#GranTurismo').fadeOut();
                    $('#F1').fadeOut();
                    $('#NeedForSpeed').fadeOut();
                    $('.Games-BoxMK8, .Games-BoxMK8 p').fadeIn();
                });

                $('#NeedForSpeed').click(function(){
                    $('#GranTurismo').fadeOut();
                    $('#MarioKart').fadeOut();
                    $('#F1').fadeOut();
                    $('.Games-BoxNFS, .Games-BoxNFS p').fadeIn();
                });
        });
        // Show Indie Games
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

                $('#Celeste').click(function(){
                    $('#HollowKnight').fadeOut();
                    $('#HotlineMiami').fadeOut();
                    $('#StardewValley').fadeOut();
                    $('#Witness').fadeOut();
                    $('.Games-BoxClst, .Games-BoxClst p').fadeIn();
                });

                $('#HollowKnight').click(function(){
                    $('#Celeste').fadeOut();
                    $('#HotlineMiami').fadeOut();
                    $('#StardewValley').fadeOut();
                    $('#Witness').fadeOut();
                    $('.Games-BoxHK, .Games-BoxHK p').fadeIn();
                });

                $('#HotlineMiami').click(function(){
                    $('#Celeste').fadeOut();
                    $('#HollowKnight').fadeOut();
                    $('#StardewValley').fadeOut();
                    $('#Witness').fadeOut();
                    $('.Games-BoxHM, .Games-BoxHM p').fadeIn();
                });

                $('#StardewValley').click(function(){
                    $('#Celeste').fadeOut();
                    $('#HotlineMiami').fadeOut();
                    $('#HollowKnight').fadeOut();
                    $('#Witness').fadeOut();
                    $('.Games-BoxSV, .Games-BoxSV p').fadeIn();
                });

                $('#Witness').click(function(){
                    $('#Celeste').fadeOut();
                    $('#HotlineMiami').fadeOut();
                    $('#StardewValley').fadeOut();
                    $('#HollowKnight').fadeOut();
                    $('.Games-BoxWtns, .Games-BoxWtns p').fadeIn();
                });
        });
        // Show Strategy Games
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

                $('#AgeOfEmpire2').click(function(){
                    $('#Starcraft2').fadeOut();
                    $('#XCOM').fadeOut();
                    $('.Games-BoxAOE2, .Games-BoxAOE2 p').fadeIn();
                });

                $('#Starcraft2').click(function(){
                    $('#AgeOfEmpire2').fadeOut();
                    $('#XCOM').fadeOut();
                    $('.Games-BoxStcrft2, .Games-BoxStcrft2 p').fadeIn();
                });

                $('#XCOM').click(function(){
                    $('#Starcraft2').fadeOut();
                    $('#AgeOfEmpire2').fadeOut();
                    $('.Games-BoxXCOM, .Games-BoxXCOM p').fadeIn();
                });
        });
        // Show Shooter Games
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

                $('#CallOfDuty').click(function(){
                    $('#Doom').fadeOut();
                    $('#Fortnite').fadeOut();
                    $('#Overwatch2').fadeOut();
                    $('#RainbowSixSiege').fadeOut();
                    $('.Games-BoxCOD, .Games-BoxCOD p').fadeIn();
                });

                $('#Doom').click(function(){
                    $('#CallOfDuty').fadeOut();
                    $('#Fortnite').fadeOut();
                    $('#Overwatch2').fadeOut();
                    $('#RainbowSixSiege').fadeOut();
                    $('.Games-BoxDoom, .Games-BoxDoom p').fadeIn();
                });

                $('#Fortnite').click(function(){
                    $('#Doom').fadeOut();
                    $('#CallOfDuty').fadeOut();
                    $('#Overwatch2').fadeOut();
                    $('#RainbowSixSiege').fadeOut();
                    $('.Games-BoxFrt, .Games-BoxFrt p').fadeIn();
                });

                $('#Overwatch2').click(function(){
                    $('#Doom').fadeOut();
                    $('#Fortnite').fadeOut();
                    $('#CallOfDuty').fadeOut();
                    $('#RainbowSixSiege').fadeOut();
                    $('.Games-BoxOvwtch2, .Games-BoxOvwtch2 p').fadeIn();
                });

                $('#RainbowSixSiege').click(function(){
                    $('#Doom').fadeOut();
                    $('#Fortnite').fadeOut();
                    $('#Overwatch2').fadeOut();
                    $('#CallOfDuty').fadeOut();
                    $('.Games-BoxRSS, .Games-BoxRSS p').fadeIn();
                });
        });
        // Show Adventure Games
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

                $('#RedDeadDemption2').click(function(){
                    $('#TheWitcher3').fadeOut();
                    $('#TheLastOfUs2').fadeOut();
                    $('#Uncharted4').fadeOut();
                    $('.Games-BoxRDD2, .Games-BoxRDD2 p').fadeIn();
                });

                $('#TheWitcher3').click(function(){
                    $('#RedDeadDemption2').fadeOut();
                    $('#TheLastOfUs2').fadeOut();
                    $('#Uncharted4').fadeOut();
                    $('.Games-BoxTW3, .Games-BoxTW3 p').fadeIn();
                });

                $('#TheLastOfUs2').click(function(){
                    $('#TheWitcher3').fadeOut();
                    $('#RedDeadDemption2').fadeOut();
                    $('#Uncharted4').fadeOut();
                    $('.Games-BoxTLOU2, .Games-BoxTLOU2 p').fadeIn();
                });

                $('#Uncharted4').click(function(){
                    $('#TheWitcher3').fadeOut();
                    $('#TheLastOfUs2').fadeOut();
                    $('#RedDeadDemption2').fadeOut();
                    $('.Games-BoxUchrt4, .Games-BoxUchrt4 p').fadeIn();
                });
        });
        // Show Fighting Games
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

                $('#MortalKombatXI').click(function(){
                    $('#StreetFighterV').fadeOut();
                    $('#Tekken7').fadeOut();
                    $('.Games-BoxMK, .Games-BoxMK p').fadeIn();
                });

                $('#StreetFighterV').click(function(){
                    $('#MortalKombatXI').fadeOut();
                    $('#Tekken7').fadeOut();
                    $('.Games-BoxSFV, .Games-BoxSFV p').fadeIn();
                });

                $('#Tekken7').click(function(){
                    $('#StreetFighterV').fadeOut();
                    $('#MortalKombatXI').fadeOut();
                    $('.Games-BoxTK7, .Games-BoxTK7 p').fadeIn();
                });
        });
        // Show Terror Games
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

                $('#Amnesia').click(function(){
                    $('#BlairWitch').fadeOut();
                    $('#Outlast').fadeOut();
                    $('#PT').fadeOut();
                    $('#ResidentEvil2').fadeOut();
                    $('#SilentHill2').fadeOut();
                    $('.Games-BoxAmn, .Games-BoxAmn p').fadeIn();
                });

                $('#BlairWitch').click(function(){
                    $('#Amnesia').fadeOut();
                    $('#Outlast').fadeOut();
                    $('#PT').fadeOut();
                    $('#ResidentEvil2').fadeOut();
                    $('#SilentHill2').fadeOut();
                    $('.Games-BoxBW, .Games-BoxBW p').fadeIn();
                });

                $('#Outlast').click(function(){
                    $('#BlairWitch').fadeOut();
                    $('#Amnesia').fadeOut();
                    $('#PT').fadeOut();
                    $('#ResidentEvil2').fadeOut();
                    $('#SilentHill2').fadeOut();
                    $('.Games-BoxOT, .Games-BoxOT p').fadeIn();
                });

                $('#PT').click(function(){
                    $('#BlairWitch').fadeOut();
                    $('#Outlast').fadeOut();
                    $('#Amnesia').fadeOut();
                    $('#ResidentEvil2').fadeOut();
                    $('#SilentHill2').fadeOut();
                    $('.Games-BoxPT, .Games-BoxPT p').fadeIn();
                });

                $('#ResidentEvil2').click(function(){
                    $('#BlairWitch').fadeOut();
                    $('#Outlast').fadeOut();
                    $('#PT').fadeOut();
                    $('#Amnesia').fadeOut();
                    $('#SilentHill2').fadeOut();
                    $('.Games-BoxRE2, .Games-BoxRE2 p').fadeIn();
                });

                $('#SilentHill2').click(function(){
                    $('#BlairWitch').fadeOut();
                    $('#Outlast').fadeOut();
                    $('#PT').fadeOut();
                    $('#ResidentEvil2').fadeOut();
                    $('#Amnesia').fadeOut();
                    $('.Games-BoxSH2, .Games-BoxSH2 p').fadeIn();
                });
        });
        // Show Graphic Novel Games
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

                $('#LifeIsStrange').click(function(){
                    $('#NightInTheWoods').fadeOut();
                    $('#UntilThen').fadeOut();
                    $('#Oxenfree').fadeOut();
                    $('.Games-BoxLIS, .Games-BoxLIS p').fadeIn();
                });

                $('#NightInTheWoods').click(function(){
                    $('#LifeIsStrange').fadeOut();
                    $('#UntilThen').fadeOut();
                    $('#Oxenfree').fadeOut();
                    $('.Games-BoxNITW, .Games-BoxNITW p').fadeIn();
                });

                $('#UntilThen').click(function(){
                    $('#NightInTheWoods').fadeOut();
                    $('#LifeIsStrange').fadeOut();
                    $('#Oxenfree').fadeOut();
                    $('.Games-BoxUT, .Games-BoxUT p').fadeIn();
                });

                $('#Oxenfree').click(function(){
                    $('#NightInTheWoods').fadeOut();
                    $('#UntilThen').fadeOut();
                    $('#LifeIsStrange').fadeOut();
                    $('.Games-BoxOxn, .Games-BoxOxn p').fadeIn();
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

            let offset = -index * 100;
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

let logged = false;

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

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        alert("Este correo ya está registrado.");
        return;
    }

    if (password.length < 8) {
        alert("Minimo 8 caracteres");
        return;
    }

    if (password.includes(" ")) {
        alert("La contraseña no puede contener espacios")
        return;
    }

    if (user && email && password) {
        users.push({ username: user, email: email, password: password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registro valido.");
        document.getElementById("welcomeMessage").innerText = "Bienvenido, " + user;

        hideButtons();
        closeModal("registerModal");
        logged = true;
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(u => u.username === user && u.password === password);

    if (foundUser) {
        alert("Inicio de sesión exitoso.");
        document.getElementById("welcomeMessage").innerText = "Bienvenido, " + foundUser.username;

        hideButtons();
        closeModal("loginModal");
        logged = true;
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function hideButtons() {
    document.querySelectorAll('.hero-btn').forEach(btn => btn.style.display = 'none');
}

// Menu hamburguer

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
    });
});

document.getElementById('cart').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active'); 
});

function checkSectionVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const menu = document.getElementById('menu');
            menu.classList.remove('active'); 
        }
    });
}

window.addEventListener('scroll', checkSectionVisibility);

// Carrito

let carrito = [];

        function agregarAlCarrito(nombre, precio) {
            carrito.push({ nombre, precio });
            alert("Agregado al carrito");
            actualizarCarrito();
        }

        function actualizarCarrito() {
            const carritoDiv = document.getElementById("carrito");
            carritoDiv.innerHTML = "";
            let total = 0;
            carrito.forEach((item, index) => {
                total += item.precio;
                const div = document.createElement("div");
                div.classList.add("carrito-item");
                div.innerHTML = `${item.nombre} - ${item.precio.toFixed(2)} € <span class='remove' onclick='eliminarDelCarrito(${index})'>X</span>`;
                carritoDiv.appendChild(div);
            });
            document.getElementById("total").innerText = total.toFixed(2);
        }

        function eliminarDelCarrito(index) {
            carrito.splice(index, 1);
            actualizarCarrito();
        }

        function mostrarCarrito() {
            document.getElementById("carrito-container").style.display = "block";
        }

        function cerrarCarrito() {
            document.getElementById("carrito-container").style.display = "none";
            $(".buy-section").hide();
        }

        function clearCart() {
            carrito = [];
            actualizarCarrito();

            document.getElementById("credit-card").value = "";
            document.getElementById("date").value = "";
            document.getElementById("cvv").value = "";
            document.getElementById("giftemail").value = "";
            document.getElementById("giftEmail").value = "";
            document.getElementById("conditions").checked = false;

            document.getElementById('giftForm').classList.add('hidden'); 
            document.getElementById('giftemail').classList.remove('hidden'); 
            document.querySelector('button.paid').classList.remove('hidden'); 
            document.querySelector('button.gift').classList.remove('hidden');
        }

        function paidComplete() {
            const card = document.getElementById('credit-card').value;
            const date = document.getElementById('date').value;
            const cvv = document.getElementById('cvv').value;
            const conditions = document.getElementById('conditions').checked;

            if (!card || !date || !cvv || !email || !conditions) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            alert('Compra completada con éxito!');
            document.querySelector('.buy-section').style.display = 'none'; 
            clearCart();
        }

        function buyForGift() {
            
            const card = document.getElementById('credit-card').value;
            const date = document.getElementById('date').value;
            const cvv = document.getElementById('cvv').value;
            const conditions = document.getElementById('conditions').checked;

            if (!card || !date || !cvv || !email || !conditions) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            document.getElementById('giftForm').classList.remove('hidden');
            document.getElementById('credit-card').classList.add('hidden');
            document.getElementById('date').classList.add('hidden');
            document.getElementById('cvv').classList.add('hidden');
            document.getElementById('conditions').classList.add('hidden');
            document.querySelector('.conditions-text').style.display = 'none'; 
            document.querySelector('button.paid').classList.add('hidden');
            document.querySelector('button.gift').classList.add('hidden');
            document.querySelector('button.cancel').classList.add('hidden');

           
        }

        function confirmGiftPurchase() {
            const giftEmail = document.getElementById('giftEmail').value;

            if (!giftEmail) {
                alert('Por favor, ingresa un correo electrónico para el regalo.');
                return;
            }

            alert(`Compra confirmada para regalo. Se enviará a: ${giftEmail}`);
            document.querySelector('.buy-section').style.display = 'none';
            clearCart();

        }

        function validateCVV(input) {
    
            input.value = input.value.replace(/[^0-9]/g, '');

            if (input.value.length > 3) {
                input.value = input.value.slice(0, 3);
            }
        }

        function formatDate(input) {
            let value = input.value.replace(/\D/g, '');
            
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            
            if (value.length > 5) {
                value = value.slice(0, 5);
            }
        
            input.value = value;
        }

        function formatCreditCard(input) {
            let value = input.value.replace(/\D/g, '');
            
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        
            if (value.length > 19) { 
                value = value.slice(0, 19);
            }
        
            input.value = value;
        }

        function closePaymentSection() {
            document.querySelector('.buy-section').style.display = 'none'; 
            document.getElementById("carrito-container").style.display = "block";
        }

        function closeGiftForm() {
            document.getElementById('giftForm').classList.add('hidden');
            document.getElementById('credit-card').classList.remove('hidden');
            document.getElementById('date').classList.remove('hidden');
            document.getElementById('cvv').classList.remove('hidden');
            document.getElementById('conditions').classList.remove('hidden');
            document.querySelector('.conditions-text').style.display = 'flex';
            document.querySelector('button.paid').classList.remove('hidden');
            document.querySelector('button.gift').classList.remove('hidden');
            document.querySelector('button.cancel').classList.remove('hidden');
        }

        function comprar() {

            
            if (logged == false) {
                alert("Logueate o Registrate");
            }else if (carrito.length == 0) {
                alert("Añada Articulos");
                cerrarCarrito;
            }else {

                $(".buy-section").show();
                document.getElementById("carrito-container").style.display = "none";

                validateCVV;
                formatDate;
                paidComplete;
                buyForGift;
                confirmGiftPurchase;
                closePaymentSection;
                closeGiftForm;
            }
        }