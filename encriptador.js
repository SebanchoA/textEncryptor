let cuadroTexto = document.getElementById("cuadroTexto");
let cuadroResultado = document.getElementById("cuadroResultado");
let imagen = document.getElementById("imagen");
let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let botonCopiar = document.getElementById("botonCopiar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
function elementosGraficos() {}

function ocultarElementosGraficos() {
  imagen.style.display = "none";
  texto1.style.display = "none";
  texto2.style.display = "none";
}

function encriptarMensaje() {
  let text = cuadroTexto.value;
  cuadroResultado.style.display = "block";
  cuadroResultado.value = encriptar(text.toLowerCase());
  botonCopiar.style.display = "flex";
}

function desencriptarMensaje() {
    let text = cuadroTexto.value;
    cuadroResultado.style.display = "block";
    cuadroResultado.value = desencriptar(text.toLowerCase());
    botonCopiar.style.display = "flex";
}

//"text" es el parametro mensaje
function encriptar(mensaje) {
  let llave = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  //Primero hacemos que se recorra la palabra ingresada
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    //encriptada guarda los valores
    let encriptada = letra;
    //Segundo se verifica y se hace el cambio de letra
    for (let j = 0; j < llave.length; j++) {
      if (letra === llave[j][0]) {
        encriptada = llave[j][1];
        break;
      }
    }
    console.log(encriptada);
    mensajeEncriptado += encriptada;
  }

  return mensajeEncriptado;
}

function desencriptar(mensaje) {
  let llave = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llave.length; i++) {
    let regex = new RegExp(llave[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llave[i][0]);
  }
  return mensajeDesencriptado;
}
// function verificar() {
//   let caracEspeciales = new RegExp("!, ?, ., ,, :, ;, +, -, *, /, =, %, $, €, £, ¥, @, #, &, *, ~, ^, á, é, í, ó, ú, ñ, ü")
//   for (let i = 0; i < caracEspeciales.length; i++) {
//       let unidades = caracEspeciales[i];
//     if (unidades = cuadroTexto) {
//       alert("No caracteres especiales");
//     }
//   }
// }
botonEncriptar.addEventListener("click", function () {
  ocultarElementosGraficos();
  // verificar();
  encriptarMensaje();
});

botonDesencriptar.addEventListener("click", function () {
    ocultarElementosGraficos();
    desencriptarMensaje();
});

botonCopiar.addEventListener("click",function(){
  copiar();
})
function copiar() {
let copiarTexto = cuadroResultado;

copiarTexto.select();
document.execCommand('copy');

alert('Su texto ha sido copiado');
}