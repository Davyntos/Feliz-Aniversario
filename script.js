// CONFIGURACIÓN DE FECHA: Establecido exactamente en el 2 de Julio de 2026
const fechaInicio = new Date(2026, 6, 2); 

function checkName() {
    const input = document.getElementById("name-input").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-msg");

    if (input.includes("karla") || input.includes("frida") || input.includes("colin")) {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
        
        // Iniciar las funciones interactivas
        initCounter();
        startHearts();
        
        // Intenta reproducir la música de fondo automáticamente al dar clic
        const song = document.getElementById("love-song");
        if (song) {
            song.play().catch(err => {
                console.log("El navegador bloqueó el autoplay sin interacción, requiere play manual.");
            });
        }
    } else {
        errorMsg.textContent = "Lo siento, este rincón secreto es exclusivo para la novia más hermosa: Karla Frida. ❌";
    }
}

function initCounter() {
    function actualizar() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        if (diferencia < 0) {
            document.getElementById("counter").innerHTML = "¡Hoy empieza nuestro contador oficial! ❤️";
        } else {
            document.getElementById("counter").innerHTML = 
                `${dias} días, ${horas} h, ${minutos} m y ${segundos} s`;
        }
    }
    
    actualizar();
    setInterval(actualizar, 1000);
}

function startHearts() {
    const container = document.getElementById("hearts-container");
    const heartSymbols = ["❤️", "💖", "💝", "💕", "🌸"];

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.fontSize = Math.random() * 1.5 + 1 + "rem";
        
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}
