'use strict'


//Condicional IF
// Si A es igual a B entonces, haz algo
	/*
		Operadores relacionales
		Mayor: >
		Menor: <
		Mayor o igual: >=
		Menor o igual: <=
		Igual: ==
		Distinto: !=
	*/

var edad = 47;
var nombre = "Harol Naranjo";

if (edad >= 18){
	//Es mayor de edad
	console.log("El señor: " + nombre + " tiene " + edad + " años");

	if(edad <= 33){
		console.log("Aun eres milenial");
	}else if(edad >= 70){
		console.log("Ya eres anciano");
	}else{
		console.log("Ya no eres milenial");
	}

}else{
	//Es menor de edad
	console.log("El joven: " + nombre + " no tiene edad suficiente que es " + edad + " años");

	if(edad <= 10){
		console.log("Eres un niño");
	}else{
		console.log("Eres un adolecente");
	}
}


/*
  Operadores logicos 

  AND(Y): &&
  OR(O): ||
  Negacion: !
*/

//Negacion
var year = 2023;
if(year != 2016){
	console.log("No es el año 2016, en realidad es: " + year);
}

// AND
if(year >= 2000 && year <= 2022){
	console.log("Estamos en la era actual");
}else{
	console.log("Es una era post moderna");
}

//OR

if(year == 2008 || year == 2018){
	console.log("El año termina en 8");
}else{
	console.log("El año no termina en 8");
}


//Condicional Switch

var numero = 18;
var imprime = "";

switch(numero){
		case 18: 
		imprime = "Acabas de cumplir la mayoria de edad";
		break;
		case 25: 
		imprime = "Eres un adulto";
		break;
		case 40: 
		imprime = "Crisis de los 40";
		break;
		case 70: 
		imprime = "Eres un anciano";
		break;
		default:
		imprime = "Tu edad es neutra";
		break;
	}

	console.log(imprime);