// CONFIGURACIÓN DE FECHA: Establecido exactamente en el 2 de Julio de 2026
const fechaInicio = new Date(2026, 6, 2); // Nota: En JS, el mes 6 representa a Julio (0 = Enero)

function checkName() {
    const input = document.getElementById("name-input").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-msg");

    // Permite el acceso flexible si escribe parte de su nombre
    if (input.includes("karla") || input.includes("frida") || input.includes("colin")) {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
        
        // Iniciar las funciones interactivas
        initCounter();
        startHearts();
    } else {
        errorMsg.textContent = "Lo siento, este rincón secreto es exclusivo para la novia más hermosa: Karla Frida. ❌";
    }
}

// Lógica del Contador de Tiempo Real
function initCounter() {
    function actualizar() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        // Cálculos matemáticos de tiempo transcurrido
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Si es antes del momento exacto del 2 de julio, mostrará 0 o valores iniciales
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

// Generador de lluvia de corazones por código
function startHearts() {
    const container = document.getElementById("hearts-container");
    const heartSymbols = ["❤️", "💖", "💝", "💕", "🌸"];

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        
        // Propiedades aleatorias para que se vea natural
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 y 6 segundos
        heart.style.fontSize = Math.random() * 1.5 + 1 + "rem"; // Tamaños variados
        
        container.appendChild(heart);

        // Eliminar del código después de que termine de flotar para no ralentizar la página
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300); // Crea un corazón cada 300 milisegundos
}