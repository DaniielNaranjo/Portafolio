'use strict'

// Operadores

var suma = 10 + 10; 
var resta = 10 - 5;
var multiplicacion = 5 * 5;
var division = 100 / 2;
var porcentaje =  7 % 12;

console.log("La suma de 10 mas 10 es: " + suma + 
			" La resta de 5 menos 10 es: " + resta +
			" La multiplicacion de 5 por 5 es: " + multiplicacion + 
			" La division de 100 entre 2 es: " + division + 
			" El porcentaje de 7 entre 12 es: " + porcentaje	
			);

// Tipos de datos 

var numero_entero = 20;
var cadena_texto = "BuscandoUnFuturo";
var verdadero_falso = true;

var numero_texto = "10";
console.log(Number(numero_texto) + 10 );
console.log(parseInt(numero_texto) + 10 );
console.log(parseFloat(numero_texto) + 10 );
console.log(String(numero_entero) + 10);


//Detectar tipo de datos 

var texto = "Hola Mundo";
var numero = 1;

console.log(typeof texto);
console.log(typeof numero);



