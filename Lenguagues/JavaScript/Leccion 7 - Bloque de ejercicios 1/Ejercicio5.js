'use strict'

/*
Muestre todos los numeros divisores de un numero introducido por el usuario
*/

var numero = parseInt(prompt("Ingrese el numero", 1));

for(var i = 1; i <=numero; i++ ){

	if(numero%i == 0){
		console.log("Divisor: " + i);	
	}
	
}