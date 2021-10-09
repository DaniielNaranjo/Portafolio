'use strict'

window.addEventListener("load", () => {

	// Fechas
	var fecha = new Date();
	var year = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	var textoHora = `
		El año es: ${year} <br/>
		El mes es: ${mes} <br/>
		El dia es: ${dia} <br/>
		La hora es: ${hora + ":" + minutos + ":" + segundos} <br/>
	`;

	document.write(textoHora);


	//Funciones matematicas
	//En google puedes buscar muchas formas de usar el metodo Marth para funciones matematicas

	var textoMath = `
		Numero random con Math.random: ${Math.ceil(Math.random()*1000)}

	`
	document.write(textoMath);
})