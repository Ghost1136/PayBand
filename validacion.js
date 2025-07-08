// Simulación de base de datos de usuarios
const usuarios = [
    {
        correo: "pasajero@ejemplo.com",
        password: "1234",
        rol: "pasajero"
    },
    {
        correo: "admin@ejemplo.com",
        password: "admin123",
        rol: "admin"
    }
];

document.getElementById("loginForm").addEventListener("submit", function() {

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    // Buscar el usuario en el array
    const usuario = usuarios.find(user => user.correo === correo && user.password === password && user.rol === rol);

    if (usuario) {
        alert("Login exitoso como " + (rol === "admin" ? "Administrador" : "Pasajero"));
        // Redirección simulada
        if (rol === "admin") {
            window.location.href = "admin.html"; // Crear esta página
        } else {
            window.location.href = "pasajero.html"; // Crear esta página
        }
    } else {
        alert("Credenciales incorrectas. Inténtalo nuevamente.");
    }
});