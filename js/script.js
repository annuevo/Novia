function irAlCubo() {
    window.location.href = "cubo.html";
}

let musicaActiva = false;

function controlarMusica() {
    const musica = document.getElementById("musica");
    const botonMusica = document.querySelector(".btn-musica");

    if (!musicaActiva) {
        musica.play();
        musicaActiva = true;
        botonMusica.textContent = "Pausar música ⏸️";
    } else {
        musica.pause();
        musicaActiva = false;
        botonMusica.textContent = "Reproducir música 🎵";
    }
}

const decoracion = document.getElementById("decoracion");
const elementos = ["💚", "✨", "🌿", "🫧", "🤍", "💫"];

function crearElementoFlotante() {
    const elemento = document.createElement("span");

    elemento.classList.add("flotante");
    elemento.innerText = elementos[Math.floor(Math.random() * elementos.length)];
    elemento.style.left = Math.random() * 100 + "vw";
    elemento.style.fontSize = 16 + Math.random() * 22 + "px";
    elemento.style.animationDuration = 5 + Math.random() * 7 + "s";
    elemento.style.opacity = 0.4 + Math.random() * 0.6;

    decoracion.appendChild(elemento);

    setTimeout(() => {
        elemento.remove();
    }, 12000);
}

setInterval(crearElementoFlotante, 400);

for (let i = 0; i < 25; i++) {
    crearElementoFlotante();
}


// CARTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// =========================
// MÚSICA AUTOMÁTICA
// =========================

window.addEventListener("load", () => {

    const musica =
        document.getElementById("musicaCarta");

    musica.volume = 0.6;

    musica.play()
        .then(() => {
            console.log("Música iniciada");
        })
        .catch(error => {
            console.log(
                "El navegador bloqueó el autoplay",
                error
            );
        });

});


// =========================
// VOLVER AL INICIO
// =========================

function volverInicio() {

    window.location.href =
        "index.html";
}


// =========================
// PÉTALOS CAYENDO
// =========================

const contenedorPetalos =
    document.getElementById("petalos");

function crearPetalo() {

    const petalo =
        document.createElement("span");

    petalo.classList.add("petalo");

    const flores = [
        "🌸",
        "🌺",
        "💮",
        "🌷"
    ];

    petalo.innerText =
        flores[
            Math.floor(
                Math.random() * flores.length
            )
        ];

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        18 + Math.random() * 18 + "px";

    petalo.style.animationDuration =
        6 + Math.random() * 6 + "s";

    contenedorPetalos.appendChild(
        petalo
    );

    setTimeout(() => {

        petalo.remove();

    }, 12000);
}

setInterval(
    crearPetalo,
    450
);


// =========================
// EFECTO MÁQUINA DE ESCRIBIR
// EN EL TÍTULO
// =========================

const titulo =
    document.querySelector(
        ".titulo-carta"
    );

if (titulo) {

    const texto =
        titulo.textContent;

    titulo.textContent = "";

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            titulo.textContent +=
                texto.charAt(i);

            i++;

            setTimeout(
                escribir,
                70
            );
        }
    }

    escribir();
}


/****CUBOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */

// =========================
// MÚSICA AUTOMÁTICA DEL CUBO
// =========================

window.addEventListener("load", () => {
    const musica = document.getElementById("musicaCubo");

    musica.volume = 1.0;

    musica.play().catch(() => {
        console.log("El navegador bloqueó el autoplay");
    });
});


// =========================
// VOLVER AL INICIO
// =========================

function volverInicio() {
    window.location.href = "index.html";
}


// =========================
// PAUSAR CUBO AL PASAR MOUSE
// =========================

const cubo = document.querySelector(".cubo");

cubo.addEventListener("mouseenter", () => {
    cubo.style.animationPlayState = "paused";
});

cubo.addEventListener("mouseleave", () => {
    cubo.style.animationPlayState = "running";
});


// =========================
// CORAZONES FLOTANTES
// =========================

function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");
    corazon.innerText = "💚";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = 16 + Math.random() * 22 + "px";
    corazon.style.animationDuration = 5 + Math.random() * 6 + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 11000);
}

setInterval(crearCorazon, 500);