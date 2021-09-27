'use strict'

/*
	Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario
*/


var numero1 = parseInt(prompt("Ingrese el primer numero", 0));
var numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

for(var i = numero1; i <= numero2; i++){
	console.log("Entre el numero: " + numero1 + " y " + numero2 + " hay estos: " + i);
}
