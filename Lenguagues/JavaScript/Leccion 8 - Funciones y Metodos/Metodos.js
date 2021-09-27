'use strict'

/*
	Metodos de Traformacion de textos(cadenas)

	.ToString() - Convierte un dato a cadena de texto.
	.toUpperCase() - Pone en mayusculas todas las letras de un texto.
	.toLowerCase() - Pone en minusculas todas las letras de un texto.

*/

var numero = 444;
var texto = " Bienvenidos al curso de JavaScript de curso Harol Naranjo ";
var texto1 = "Es muy bueno";

var dato = numero.toString();
	dato = texto.toLowerCase();
console.log(dato);


/*
	Calcular longitud
	.length - Calcula cuantas letras tiene un texto o cuentas elementos de 
	un array sean numeros o cadenas de texto.
*/

var nombre = "1234";
	nombre = [2, 2];

console.log(nombre.length);


/*
	Concatenar textos(Unir textos)
	+ - Se puede unir dos texto usando un + entre dos datos.
	.concat() - Une dos texto o mas. 
*/

var textoTotal = texto.concat( " " +  texto1);
console.log(textoTotal);


/*
	Metodos para buscar en una cadena	

	.indexOf() - Busca una palabra indicando en que caracter comienza(busca la primera considencia).
	.lastIndexOf() - Busca una palabra indicando el caracter donde comienza(busca la ultima considencia).
	.search() - Es similiar a indexOF, busca una palabra indicando en que caracter comienza(busca la primera considencia).
	.match(/dato/g) - Devuelve un array con los resultados que encuentre (indicar expresion regular).
	.substr() - Busca el caracter indicado y despues busca la cantidad de caracteres hacia delante(indique el caracter donde
	quiere empezar a buscar, despues digite la cantidad de caracteres que quiere buscar).
	.charAt() - Busca una letra con el numero del caracter expecificados(Busca letra mediante un numero de caracter).
	.startsWith() - Busca una palabra y indica si exite o no (devuelve un valor true si la encuentra o un valor false si no la encuentra,
	pero solo al principo de la cadena).
	.endsWith() - Busca una palabra y indica si exite o no (devuelve un valor true si la encuentra o un valor false si no la encuentra, pero
	solo al final de la cadena).
	.includes() - Busca una palabra en toda la cadena de texto(devuelve un valor true si la encuentra o un valor false si no la encuentra,
	debes ser exacto en la palabra(no diferencia entre mayusculas o minusculas)).
*/

var busqueda = texto.includes("harol");
console.log(busqueda);



/*
	Funciones de remplazo 

	.replace("PalabraARemplazar", "Nueva palabra") - Remplaza una palabra indicada por otra dentro de una cadena de texto.
	.slice(4,6) - Separa o recorta una parte de la cadena del texto indicando el numero del caracterer donde comenzar, (Recorta
	desde la parte de delante y de atras).
	.split(" ") - Mete la cadena de texto en un array(puedes separa las palabras con dos " " para que el array coja palabra
	por palabra y las posiciones).
	.trim() - Quita los espacios del principio y final de una cadena de texto;

*/

var remplazar = texto.trim();
console.log(remplazar);



/*
	Plntillas de texto 
	
	 ` ` - Crea un tipo de platilla donde se puede escribir codigo html pero con datos que pueden variar introduciendo
	 codigo javascript(para ingresar datos javascript en la platilla se un ${variable})
*/


var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");

//var nombreCompleto = "Mi nombre es : " + nombre + "<br/>" + "Mi Apellido es: " + apellido;

var nombreCompleto = ` 
	<h1>Hola</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellido es: ${apellido}</h3>
`;
document.write(nombreCompleto);