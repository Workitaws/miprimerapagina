alert("Hola este es mi Javascript");



//llamar variable consola//
let nombre = "fede";

const nombre1 = "fede";

var nombre2 = "fede";


console.log(nombre)

console.log(nombre1)

console.log(nombre2)


//Selecionar Elementos

let Titulo1 = "MiWeBEGG";


let titulo2 = document.querySelector(".logo1");

titulo2.innerHTML = Titulo1;

let textoTitulo = titulo2.innerText
console.log(textoTitulo)

if (textoTitulo == "Hola") {
   titulo.innerHTML = "otro"
} else {
    console.log("no Esta el TEXTO");
} 


//FUNCIONES

let nombres = "Fede G.";
let ciudad = "JUJUY";
let gusto = "chocolate";

let parrafo = document.querySelector(".ok1");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `${nombres} ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, sit praesentium quas
    beatae
    ${ciudad} soluta tempore delectus ipsa odio earum id sunt sint, cupiditate illo harum vero.
    Cupiditate, iure! ${gusto}.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombres, ciudad, gusto);

//Ejecuciones de Chats

const form = document.getElementById("form");
const nombress = document.getElementById("nombre");
const parrafos = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafos.innerHTML = "";

    if (nombress.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafos.innerHTML = warnings;
    } else {
        parrafos.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});
