'use strict'

/*
 	DOM - Document Object Model

 	 document. - Busca fucniones para interactuar con el html.
	.getElementById() - Selecciona un identificador especificado en el html.
	.querySelector("#nombre") - Selecciona un identificador especificado en el html. (para clases se usa un punto . - para identificadores se una #).
	.innerHTML - Busca el contenido de las etiquetas html y permite cambiar el contenido (saca el texto).
	.style - Coloca estilo CSS (despues de esta funcion coloca lo que quieres hacer osea .style.background = "red";).
	.className = "nombre" - Coloca una clase en los elementos html.
	.getElementsByTagName('div') - Seleciona todos los elementos html indicados.
	.textContent - muestra el contenido de un arrays o otras funciones.
	.createElement("p") - Crea una etiqueta para incrustarla en el codigo html.
	.createTextNode() Crea un nuevo nodo de texto.
	.appendChild() - Inserta un nuevo nodo dentro de la estructura DOM de un documento.
	.prepend() que tiene como funcionalidad añadir o insertar contenido al comienzo del elemento seleccionado.
	El caso opuesto lo tenemos con append() que añade contenido al final.
*/

function cambiaColor(color){
	caja.style.background = color;
}

//var caja = document.getElementById("caja");
var caja = document.querySelector("#caja");

caja.innerHTML = "Texto desde un innerHTML";
caja.style.background = "black";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola"
console.log(caja);


/*
	Seleccionar y modificar elementos de la pagina
*/

 //Conseguir elementos por su etiqueta
var hr = document.createElement('hr'); 
var seccion = document.querySelector("#seccion");
var todosLosDivs = document.getElementsByTagName('div');

	for(let div in todosLosDivs)
	{
		//introduce solo elementos tipo string
		if (typeof todosLosDivs[div].textContent == "string") 
		{
			var parrafo = document.createElement("p");
			var texto = document.createTextNode(todosLosDivs[div].textContent);
			parrafo.prepend(texto);
			seccion.prepend(parrafo);


		}
	}

	seccion.append(hr);


 //Conseguir elementos por su clase

 var divRojos = document.getElementsByClassName('rojo');
 var divVerdes = document.getElementsByClassName('verde');
 divVerdes[0].style.background = "green";

 for(let rojo in divRojos){

 	if(divRojos[rojo].className == "rojo")
 	{
 		divRojos[rojo].style.background = "red";
 	}	
 }
 
 console.log(divRojos);


 /*
	Query Selector
	no sirve para traer una coleccion de arrays html pero para seleccionar muchos elementos 
	exite el querySelectorAll(referencia: https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)
 */

 var id = document.querySelector("#encabezado");
 console.log(id);

 var etiqueta = document.querySelectorAll("div");
 console.log(etiqueta);