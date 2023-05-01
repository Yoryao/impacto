console.log("app.js vinculado")

// comportamiento boton Formulario
let botonEnviar = document.getElementById("formButton");

let presionar = (e) => {
    e.preventDefault();
    console.log("Boton Presionado");
}

botonEnviar.addEventListener("click", presionar);

// fin boton formulario