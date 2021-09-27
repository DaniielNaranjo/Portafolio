'use strict'

/*
	Convertir un string en array
	.split() - Convierte una cadena a string(indicar la separacion en los()).
*/	
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(', ');

console.log(cadena_array); 

/*
	Ordenar Arrays
	.sort() - Ordena de forma alfabeticamente.
	.reverse() - Voltea el orden del array(ultimo a primero y primero a ultimo)
*/
var peliculas = ["Rambo", "Chuky", "Que Paso Ayer", "One Push", "Planeta de los simios"];

console.log(peliculas.reverse());


/*
	Recorrer un Array con FOR IN
*/

document.write("<h1>Listado Peliculas</h1>");
document.write("<ul>");

for(let pelicula in peliculas){
	document.write("<li>" + peliculas[pelicula] + "</li>");
}

document.write("</ul>");


/*
	Busquedas en arrys
	.find() - Podemos encontrar el primer valor que cumpla con función que definimos.
	.findIndex() - Nos muestra la pocicion donde se encuentra el dato que definimos.
	.some() - Método comprueba si alguno de los elementos de una matriz pasa una prueba (proporcionada como función).
*/

var precios = [10000, 20000, 30000, 40000, 50000];
var busquedaPrecios = precios.some(precio => precio >= 5000);
console.log(busquedaPrecios);


var busqueda = peliculas.findIndex(pelicula => pelicula == "Chuky");
console.log(busqueda);