'use strict'

window.addEventListener("load", () =>{
var formulario = document.querySelector("#formVideojuegos");
var deleteForm = document.querySelector("#formBorrarVideojuegos");
var cajaVideojuegos = document.querySelector("#cajaVideojuegos");

//recorrer local storage

for(let i in localStorage){
if (typeof localStorage[i] == 'string') {
	let li = document.createElement("li");
	li.append(i + " " + localStorage[i]);
	cajaVideojuegos.append(li);
}}


	formulario.addEventListener("submit", ()=>{
		//No recarga la pagina
		//event.preventDefault();
		//variables 
		var nombreJuego = document.querySelector("#nombreJuego").value;

		//Logica
		if(nombreJuego.length >= 1 ){
			alert("Nombre Introducido");
			localStorage.setItem(nombreJuego, nombreJuego);
			nombreJuego = document.querySelector("#nombreJuego").value = "";
		}else if (nombreJuego.length <=0 ) {
			alert("Introduce un nombre");
		}else{
			alert("Error 505");
		}

	});

	deleteForm.addEventListener("submit", () => {
		//variables 
		var borrarJuego = document.querySelector("#deleteJuego").value;

		if (borrarJuego.length >= 1 ) {
			alert("Juego Borrado");
			localStorage.removeItem(borrarJuego);
		}else if (nombreJuego.length <=0 ) {
			alert("Introduce el nombre del Juego a borrar");
		}else{
			alert("Error 505");
		}


	});



});