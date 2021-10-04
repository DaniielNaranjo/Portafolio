'use strict'

/*
 		BOM - Browser Object Model
 	window. - acceder a propiedades de la pestaña.
 	window.innerHeight(Altura), window.innerWidth(Anchura) - obtener tamaño de la pestaña.
 	screen.height, screen.width - obtiene el tamaño de la pestaña al momento de entrar en ella.
 	window.location - obtiene el objeto localizacion de la pagina(URL).
	window.open - abre una nueva pestaña.
*/

function getBOM(){
	console.log(screen.height);
	console.log(screen.width);
	console.log(window.location);
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url) {
	//Agregar parametros deseados 
	window.open(url, " " ,"width=400, height=300");
}