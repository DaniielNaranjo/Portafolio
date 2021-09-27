'use strict'

/*alert("Esta listo");*/

// Variables - Var

var pais = "Colombia";
var continente = "Latino America";
var año = 2021;
var pais_continente = pais + " " + continente;

/*console.log("Pais: " + pais + " Continente: " + continente + " Año Actual: " + año );
alert(pais_continente);*/



// Variables - Let 

var nombre = "Harol";
//console.log(nombre);

if(true){
	let nombre = "karen";
	//console.log(nombre);
}
//console.log(nombre);


// Variables - Const

var web = "https://BuscandoUnFuturo.es";
const ip = "192.88.0.12";

web = "https://BuscandoUnFuturo.com";
//ip = "192.88.0.10";

console.log("Hosting: " + web + " IP: " + ip);