const images = [
            "publics\assets\Imagenes\prueba22.jpg",
            "publics/assets/Imagenes/Prueba23.jpg",
            "publics/assets/Imagenes/Prueba24.jpg",
            "publics/assets/Imagenes/Prueba25.jpeg"
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