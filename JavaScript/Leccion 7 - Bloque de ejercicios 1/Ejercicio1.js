'use strict'

/*
	Progrma que pida dos numeros y que nos diga cual es el mayor,
	el menor y si son iguales 

	PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuela a pedir
*/

	var numero1 = Number(prompt("Digite el primer numero", 0));
	var numero2 = Number(prompt("Digite el segundo numero", 0));

while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0 ){
	numero1 = Number(prompt("Digite el primer numero", 0));
	numero2 = Number(prompt("Digite el segundo numero", 0));
}
if(numero1 < numero2){
	alert("Mayor: " + numero2 + 
		  " Menor: " + numero1
		  );
}else if (numero1 > numero2){
	alert("Menor: " + numero2 +
		  " Mayor: " + numero1	
		  );
}else if (numero1 == numero2){
	alert("Son iguales: " + numero1 + " y " + numero2);
}else{
 alert("Introduce un numero");
}