'use strict'


/*
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero (todos los lementos) en el cuerpo de la pagina y consola 
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostralo
5 mostrar cuandos elementos tiene el array
6. Busqueda de un valor introcuciodo por el usuario, y nos diga si esta en el array y su indice(pocicion)

*/

//Automatizar listado 
function mostrarpantalla(elementos,titulo = ""){
	document.write("<h1> Listado de numeros "+ titulo +"</h1>");
	document.write("<ul>");
		elementos.forEach((elemento,indice)=> {
			document.write("<li>" + indice + " - " + elemento +"</li>");
		});
	document.write("</ul>")
};

//Crear un array de 6 pociciones
var numeros =[];
//var array = new Array(6);

//Introducir informacion en el array
for(var i = 0; i <= 5; i++){
	numeros.push(parseInt(prompt("Digite un numero", 0)));
	//array[i] = parseInt(prompt("Digite un numero", 0));
}

//Mostrar por consola ordenadamente 
console.log(numeros.sort());

//Mostrar por pantalla ordenadamente
numeros.sort(function(a, b) {return a-b});
mostrarpantalla(numeros, "ordenadamente");

//Mostrar por pantalla alrevez
numeros.reverse();
mostrarpantalla(numeros, "alrevez");


//Elementos en el array
document.write("<h1> Elementos encontrados: " + numeros.length + "</h1>");


//Busqueda 
var busqueda = parseInt(prompt("Ingrese el numero a buscar", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion == true && posicion !=-1){
	document.write("<h1> Elementos encontrados </h1>");
	document.write("<h1> Posicion: " + posicion + "<br/> Dato: " + busqueda + "</h1>");
}else{
	document.write("<h1> Elementos no encontrados </h1>");
}
