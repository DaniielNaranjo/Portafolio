'use strict'

/*
		Local Storage - Almacenamiento local en el navegador
	JSON. - accer al objecto JSON.
	.stringify - convirte objeto JSON a JSON string.
	.parse - convirte un string de JSON a Objeto JSON.
	localStorage. - accede al objeto del localStorage.
	.setItem("Key", "Value") - Agregar un item.
	.getItem("Key") - obtener un item
	.removeItem
*/

// Comprobar disponibilidad del LocalStorage
if(typeof (Storage) !== 'undefined'){
	console.log("LocalStorage Disponible");
}else{
	console.log("Navegador incompatible con LocalStorage");
}

// Guardar Elemento
localStorage.setItem("Titulo", "Curso de JavaScript con Harol Naranjo");

	// Guardar objetos
	var usuario = {
		nombre: "Harol Naranjo",
		email: "hdnaranjo8@misena.edu.co",
		web: "BuscandoUnFuturo.com"
	};
	localStorage.setItem("usuario", JSON.stringify(usuario));

	// Limpiar localStorage
	//localStorage.clear();

	// Eliminar Item 
	//localStorage.removeItem("usuario");

window.addEventListener("load", () =>{

	// Obtener Elemento
	document.querySelector("#caja").append(localStorage.getItem("Titulo"));

	// Obtener objeto
	var userjs = JSON.parse(localStorage.getItem("usuario"));
	document.querySelector("#datos").append(userjs.nombre+ " - " + userjs.web);





});