'use strict'

//Funciones
//Una funcion es una agrupacion reutilizable de un cojunto de instrucciones

// Defino la funcion
function calculadora(){
	//conjunto de instrucciones a ejecutar
	console.log("Hola soy la calculadora");
	console.log("Si soy yo");

	//devuelve el valor de la funcion
	return "Hola soy la calculadora!!";
} 

//Invocar o llamar a la funcion 
calculadora();


//Funciones con parametros 
//Parametros Opcionales: mostrar = false

function calculadora1(numero1, numero2, mostrar = false){

	if(mostrar == false){
		console.log("Suma: " + (numero1+numero2)+"\n");
		console.log("Resta: " + (numero1-numero2)+"\n");
		console.log("Multiplicacion: " + (numero1*numero2)+"\n");
		console.log("Division: " + (numero1/numero2)+"\n");
		console.log("******************************************"+"\n");	
	}else{
		document.write("Suma: " + (numero1+numero2)+"<br/>");
		document.write("Resta: " + (numero1-numero2)+"<br/>");
		document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
		document.write("Division: " + (numero1/numero2)+"<br/>");
		document.write("******************************************"+"<br/>");
	}
	
}
calculadora1(12,40);
calculadora1(23,69, true);
/*
for(var i = 1; i <= 10; i++){
	console.log(i);
	calculadora1(i,9);
}
*/


//Funciones dentron de otras funciones
function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2)+"\n");
	console.log("Resta: " + (numero1-numero2)+"\n");
	console.log("Multiplicacion: " + (numero1*numero2)+"\n");
	console.log("Division: " + (numero1/numero2)+"\n");
	console.log("******************************************"+"\n");	
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2)+"<br/>");
	document.write("Resta: " + (numero1-numero2)+"<br/>");
	document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
	document.write("Division: " + (numero1/numero2)+"<br/>");
	document.write("******************************************"+"<br/>");
}

function calculadora2 (numero1, numero2, mostrar = false){
	if(mostrar == false){
		porPantalla(numero1,numero2);
	}else{
		porPantalla(numero1, numero2);
	}
}

calculadora2(45,32,true);



/*
 Parametros REST y SPREAD
REST: recoje todos los datos no definidos en la funcion,
para indicar este parametro coloque tres puntos detra del parametro  
*/
function listadoFrutas(fruta1, fruta2, ...todas_las_frutas){
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log(todas_las_frutas);
	console.log("******************************************"+"\n");	
}

listadoFrutas("Naranja", "Pera", "Sandia", "Manzana", "Melon", "Coco");

/*
SPREAD: Pociciona datos de forma como si fuera un parametro unico y
no todos los datos en un solo parametro, para indicar este parametro
coloque tres puntos a la variable que quiere pocicionar  
*/
var frutas = ["Naranja", "Pera"];
listadoFrutas(...frutas, "Sandia", "Manzana", "Melon", "Coco");
