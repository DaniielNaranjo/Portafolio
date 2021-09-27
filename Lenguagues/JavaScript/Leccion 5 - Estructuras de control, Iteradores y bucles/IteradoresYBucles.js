'use strict'
 
//bucle es una estructura de control que se repite varias veces
//con la codicional "break" puedes parar el bucle

//Bucle FOR
//Contador - Condicion - Incrementador
 var numero = 5;

 for(var i = 0;  i <= numero; i++){
 	console.log("Es el numero: " + i);

 	//debugger;
 	//break;
 }

 //Bucle WHILE
 //Mientras que - Ejecuta esto - incrmentador


 var year = 2018;

 while(year <= 2025){
 	console.log("El año : " + year);
 	year++;
 }

//Bucle DO WHILE
//se ejecuta priemro el codigo y despues la codicion 

var years = 10; 

do{
	alert("Cuenta Regresiva: " + years);
	years--;
	if(years == 0){
	alert("Lest Go!!!");
    }
}while(years >= 1)




