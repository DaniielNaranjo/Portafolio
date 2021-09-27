'use strict'


//Funciones anonimas 
//Es una funcion que no tiene nombre


var pelicula = function(nombre) {
	return "La pelicula es: " + nombre;
	
}

//Funciones CallBack
//CallBack: Una funcion que se ejecuta dentro de otra funcion 

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,6,function(dato){
	console.log("La suma es: ", dato);
},function(dato){
	console.log("La suma por dos es: ", (dato*2));
});
 
/*
	Funciones Flecha
	para funciones callback ya no es nesesario poner la palabra
	reservada function, se realiza poniendo (dato) => { codigo},
	simplificando el codigo
*/

sumame(5,6,(dato) =>{
	console.log("La suma es: ", dato);
},(dato) => {
	console.log("La suma por dos es: ", (dato*2));
});



/*
	Ambito de las variables
	Las variables dentro de una funcion solo se pueden utilizar
	dentro de la funcion, y las variables globales son accesibles
	a todas las funciones.
*/

function holaMundo(texto){
	var hola_Mundo = "Texto dentro de funcion";
	console.log(texto);
	console.log(numero.toString);
	console.log(hola_Mundo);
}

var texto = "Soy una variable global";
var numero = 20;
holaMundo(texto);
//console.log(hola_Mundo);



