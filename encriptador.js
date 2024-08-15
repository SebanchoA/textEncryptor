// Conexión de elementos con el DOM

const ingresoTexto = document.querySelector(".ingresar__texto").value;
const botonEncriptar = document.querySelector(".boton__encriptar");
const botonDesencriptar = document.querySelector(".boton__desencriptar");
const salidaTexto = document.querySelector(".resultado");
const tituloSalida = document.querySelector(".right__container__title");
const mensajeSalida = document.querySelector(".right__container__text");
const botonCopiar = document.querySelector(".boton__copiar");


// Validacion de texto

function validarTexto() {
    const regex = /^[a-z]+$/;
    ingresoTexto.innerHTML = "";
}


// Funcion encriptar

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function encriptar(ingresoTexto) {
    
    let llave = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    
    for (let i = 0; i < llave.length; index++) {
        const arregloLlave = llave[i];
    }
}