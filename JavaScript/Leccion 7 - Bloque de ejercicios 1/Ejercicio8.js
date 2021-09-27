'use strict'

/*
	Una calculadora 
	-Pida dos numeros por pantalla
	-Si metemos uno mal que nos los vuelva a pedir
	-en el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar,
	 restar, multiplicar y dividir esas dos cifras  
*/

var numero1 = parseInt(prompt("Ingrese el primer numero", 1));
var numero2 = parseInt(prompt("Ingrese el segundo numero", 1));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Ingrese el primer numero", 1));
	numero2 = parseInt(prompt("Ingrese el segundo numero", 1));	
}

var resultado = "la suma es: " + (numero1+numero2) +"<br/>"+
				"La resta es: " + (numero1-numero2) +"<br/>"+
				"La Mulplicacion es: " + (numero1*numero2) +"<br/>"+
				"La division es: " + (numero1/numero2);

var resultadoCMD = "la suma es: " + (numero1+numero2) +"\n"+
				"La resta es: " + (numero1-numero2) +"\n"+
				"La Mulplicacion es: " + (numero1*numero2) +"\n"+
				"La division es: " + (numero1/numero2);

alert(resultadoCMD);
document.write(resultado);
console.log(resultadoCMD);