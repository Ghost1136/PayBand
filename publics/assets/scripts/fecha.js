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