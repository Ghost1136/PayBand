document.addEventListener('DOMContentLoaded', function() {
    // 1. Control de fecha dinámica
    const fechaElemento = document.getElementById('fecha-actual');
    const fechaActual = new Date();
    const opcionesFecha = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const fechaFormateada = fechaActual.toLocaleDateString('es-PE', opcionesFecha);
    fechaElemento.textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

    // 2. Interacción con el carrusel
    const images = [
        "assets/Imagenes/prueba22.jpg",
        "assets/Imagenes/Prueba23.jpg",
        "assets/Imagenes/Prueba24.jpg",
        "assets/Imagenes/Prueba25.jpeg"
    ];
    let currentIndex = 0;
    const contenedor = document.getElementById('contenedorPrincipal');

    function setBg(index) {
        contenedor.style.transition = "background-image 0.3s ease";
        contenedor.style.backgroundImage = `url('${images[index]}')`;
        contenedor.style.backgroundSize = "cover";
        contenedor.style.backgroundPosition = "center";
        contenedor.style.backgroundRepeat = "no-repeat";
    }
    setBg(currentIndex);

    document.getElementById('prevBtn').onclick = function() {
        contenedor.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            setBg(currentIndex);
            contenedor.style.opacity = 1;
        }, 300);
    };

    document.getElementById('nextBtn').onclick = function() {
        contenedor.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setBg(currentIndex);
            contenedor.style.opacity = 1;
        }, 300);
    };

    // 3. Cambiar el texto del título al hacer clic en el botón
    const btn = document.querySelector('#changeTextBtn');
    const title = document.querySelector('.titulo');
    
    if (btn) {
        btn.addEventListener('click', function() {
            title.textContent = "Texto cambiado dinámicamente con JavaScript";
        });
    }

    // 4. Controlar el formulario de registro
    const form = document.querySelector('.registro form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const rol = document.getElementById('rol').value;
            const password = document.getElementById('password').value;

            
            alert(`Usuario Registrado: ${nombre}, Correo: ${correo}, Rol: ${rol}`);
        });
    }
});
