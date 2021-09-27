'use strict'

/*
	Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
	hasta introducir un numero negativo y ahi mostrar el resultado.		
*/


var suma = 0;
var contador = 0;
do{
 var datos = parseInt(prompt("Introduce un numero", 0));

 if(isNaN(datos)){
 	datos = 0;
 }else if(datos >= 0){
 	suma += datos;
 	contador++;
 }
console.log(suma);
console.log(contador);
	
}while(datos > 0)

alert("La suma de los numeros ingresados es: " + suma + " y el promedio es: " + (suma/contador));
