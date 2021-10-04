'use strict'

/*
	Eventos 
	.addEventListener('click', mas funcion de callback o anonima) - Capturar cualquier evento.
	String.fromCharCode(event.KeyCode) - muestra la tecla que se esta escribiendo ( Evento KeyDown ) 
	window.addEventListener("load", () => {}) - carga primero el DOM y despues el codigo javascritp
*/

window.addEventListener("load", () => {

	//eventos del raton
	var boton = document.querySelector("#boton");
	var caja = document.querySelector("#caja");
	caja.style.background = "green";


	function cambiarColor() {
		var bg = caja.style.background;
		if(bg == "green"){
			caja.style.background="red";
		}else{
			caja.style.background="green";
		}
		caja.style.padding = "5px";
		caja.style.border = "2px solid #ccc";
	}

	// Evento Click
	boton.addEventListener('click', function(){
		cambiarColor();
	});

	// Evento Mouse Over
	boton.addEventListener('mouseover', function(){
		boton.style.background = "blue";
	});

	// Evento Mouse Out
	boton.addEventListener('mouseout', function(){
		boton.style.background = "white";
	});

	var caja1 = document.querySelector("#caja1");
	var input = document.querySelector("#campo_nombre");

	// Evento Focus
	input.addEventListener('focus', function(){
		caja1.innerHTML = "[Focus] Estas estas dentro del input";
		caja1.style.background = "yellow";
	});

	// Evento Blur
	input.addEventListener('blur', function(){
		caja1.innerHTML = "[Blur] Estas estas fuera del input";
		caja1.style.background = "gray";
	});

	// Evento Keydown
	input.addEventListener('keydown', function(event){
		caja1.innerHTML = "[Keydown] Estas escribiendo";
		console.log(String.fromCharCode(event.KeyCode));
		caja1.style.background = "orange";
	});

	// Evento KeyPress
	input.addEventListener('keypress', function(event){
		caja1.innerHTML = "[KeyPress] Tecla precionada";
		console.log(String.fromCharCode(event.KeyCode));
		caja1.style.background = "blue";
	});

	// Evento KeyUp
	input.addEventListener('keyup', function(event){
		caja1.innerHTML = "[KeyPress] Tecla soltada";
		console.log(String.fromCharCode(event.KeyCode));
		caja1.style.background = "red";
	});

	/*
			Timers
		setTimeOut() - solo se ejecuta una vez en el tiempo indicado.
		setInterval() - Se ejecuta en buble hasta el tiempo indicado.
		clearInterval() - Para el intervalo o bucle.
	*/ 

	// se ejecuta el tiempo idicado en micro segundos

	function intervalo() {
	 	var tiempo = setInterval(() => {
		var h1 = document.querySelector("#h1");
		console.log("Set Interval esta ejecutandose");
		h1.style.background = "white";
		if (h1.style.background == "white")
		{
			h1.style.background = "orange";
		}else {
			h1.style.background = "white";
		}

		}, 1000);
		return tiempo;
	 } 
	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");
	var start = document.querySelector("#start");

	stop.addEventListener("click", () =>{
		clearInterval(tiempo);
		alert("El intervalo se ha Detenido");
	});

	start.addEventListener("click", () =>{
		clearInterval(tiempo);
		tiempo = intervalo();
		alert("El intervalo ha Iniciado");
	});




});



