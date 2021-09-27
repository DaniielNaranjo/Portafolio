'use strict'

/*
	Tabla de multiplicar de un numero introducido por pantalla 
*/

var numero = parseInt(prompt("Ingrese el numero a multiplicar"));

for(var i = 1; i <= 10; i++){

	while(isNaN(numero) || numero<=0){
		numero = parseInt(prompt("Ingrese el numero a multiplicar"));		
	}
	if(numero >= 1){
	console.log(numero + " x " + i + " = " + (numero*i));	
	}
	
}

//Tablas de multiplicar

for(var c = 1; c <= 10; c++){
	document.write("<h1>Tabla multiplicar del " + c +"</h1>");
	for(var i = 1; i <= 10; i++){
		document.write(c + " x " + i + " = " + (c*i) +"<br/>" );
	}
}