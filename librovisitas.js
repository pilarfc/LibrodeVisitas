
function crearPreview (input) { // Este input se pone así con este nombre ya que estamos llamando lo que está dentro del text area que es igual a value.

var textoEntrada = input.value;
var preview = document.getElementById("preview");

preview.innerHTML = textoEntrada;

} // this es un generador del evento, es solo para acceder a una parte específica del código.


function cambiarTextoGrande () {

  var preview = document.getElementById("preview");
  preview.style.fontSize = "48px";
}



function cambiarTextoMediano () {

  var preview = document.getElementById("preview");
  preview.style.fontSize = "20px";
}

function cambiarTextoChico () {

  var preview = document.getElementById("preview");
  preview.style.fontSize = "8px";
}


function colorTexto () {

  var preview = document.getElementById("preview");
  preview.style.color = prompt("color:?, si no sabes el color hexadecimal, búscalo en Google");
}

function colorFondo () {
 var preview = document.getElementById("preview");
 preview.style.background = prompt("fondo:?, si no sabes el color hexadecimal, búscalo en Google");
}


function alinearIzquierda () {
 var preview = document.getElementById("preview");
 preview.style.textAlign = "left";
 }

 function centrar () {
  var preview = document.getElementById("preview");
  preview.style.textAlign = "center";
  }


  function alinearDerecha () {
   var preview = document.getElementById("preview");
   preview.style.textAlign = "right";
   }

function agregarImagen () {

  var imagenPorAgregar = prompt ("url");
  var imagen = document.createElement("img");
  var preview = document.getElementById("preview");
  imagen.src = imagenPorAgregar;
  preview.appendChild(imagen);
}

function agregarLista () {
var numeroElementosenLista = prompt ("Número");
var nuevaLista = document.createElement("ol");
var preview = document.getElementById("preview");


for (var i = 0; i < numeroElementosenLista; i++) {
var valorNuevoItem = prompt("Agrega tu número");
var nuevoItem = document.createElement("li");
nuevoItem.innerText = valorNuevoItem;
nuevaLista.appendChild(nuevoItem);
 }
 preview.appendChild(nuevaLista);
}

function enviarComentario () {

  var contenedorDeComentarios = document.getElementById("contenedorDeComentarios");
  var preview = document.getElementById("preview");
/*  var fontSize = preview.style.fontSize;
  contenedorDeComentarios.style.fontSize = fontSize;
  var nuevoComentario = document.createElement("section"); */
  var nuevoNodo = preview.cloneNode(true); // Agregando el true clona todo incluyendo el texto
  /*nuevoComentario.style.fontSize = fontSize;
  nuevoComentario.innerHTML = preview.innerHTML; */
 var contenidoComentario = document.getElementById("contenidoComentario");
 var botonBorrar = document.createElement("button");


  nuevoNodo.id = Date.now(); // Poniéndole un nuevo nodo a los clonados, ya que si no se sobreescribirían estos. Date now jamás va a tener id iguales.
  botonBorrar.value = nuevoNodo.id;
  botonBorrar.innerText = "Borrar";
  botonBorrar.onclick = function () {
    var idDelElementoABorrar = document.getElementById(this.value);
    contenedorDeComentarios.removeChild(this);
    contenedorDeComentarios.removeChild(idDelElementoABorrar);
  }


  preview.innerHTML = "";
  contenidoComentario.value = "";
  contenedorDeComentarios.insertBefore(nuevoNodo, contenedorDeComentarios.firstChild);
  contenedorDeComentarios.insertBefore(botonBorrar, contenedorDeComentarios.firstChild);

}
