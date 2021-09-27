'use strict'

//Arrays, Arreglos, Matrices
//Una coleccion de datos 

var nombres = ["Victor Robles" , "Juan Lopez", "Harol Naranjo","Karen Mendez", 59 , true];

var lenguagues =  new Array("php", "JavaScript", "GO", "Java", "C#", "Visual Basic");

//console.log(lenguagues[2], nombres.length);


//Arrays Avanzados

/*
var elemento = parseInt(prompt("Seleccione el elemento del array", 0));

if(elemento >= lenguagues.length || elemento < 0){
	alert("Solo hay estos elementos: " + lenguagues.length);
}else{
 	alert(lenguagues[elemento]);
}
*/

//Recorrer un Array

/*
document.write("<h1>lenguagues de programacion</h1>");
document.write("<ul>");
for(var i = 0; i < lenguagues.length; i++){
	document.write("<li>" + lenguagues[i] +"</li>");
}
*/

/*
	elemento: el dato, indice: la pocicion del dato, array: trae el array utilizando

lenguagues.forEach((elemento, indice, array)=>{
	document.write("<li>" + indice + " - "+ elemento +"</li>");
});
document.write("</ul>");
*/

// Arrays multidimencionales
// Son colecciones de datos dentro de mas colecciones de datos(Arrays dentro de otros Arrays)

var categoria = ["Accion", "Terror", "Comedia", "Anime", "Ciencia Ficcion"];
var peliculas = ["Rambo", "Chuky", "Que Paso Ayer", "One Push", "Planeta de los simios"];

var cine = [categoria, peliculas];

//console.log(cine[1][1]);
//console.log(cine[0][0]);


/* 
   		Operaciones con Arrays
 	.push() - sirve para crear un nuevo elemento en el array.
	.join() - convierte un array en una cadena de texto separada por comas.
*/
var elemento = "";
var indice = "";

do {
	elemento = prompt("Crear una pelicula");
	peliculas.push(elemento);
	indice = peliculas.indexOf("ACABAR");

	//borrar la palabra ACABAR del array
	if(indice > 0){
	peliculas.splice(indice, 1);
}
}while(elemento != "ACABAR")

var peliculas_string = peliculas.join();

console.log(peliculas_string);
