document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("mostrarBoton");
    var imagen = document.getElementById("miImagen");

    boton.addEventListener("click", function() {
        imagen.style.display = "block";
    });
});
