'use strict'

window.addEventListener("load", ()=>{

	$(document).ready(function(){
		console.log("Jquery Cargado");

		/*
			Interaciones

			todas estas funciones permiten paramentro con formato JSON {propiedad: valor}
			
			.draggable() - permite mover etiquetas atravez de la pagina
			.resizable() - permite hacer mas grande los elementos de la pagina
			.selectable() - perimite selecionar o deseleccionar un elemento de la pagina
			.droppable() - detecta un elemento dentro de el
			.sortable() - permite mover la lista al gusto 
			.toggle("fade"), .effect("explote") - muestra efectos o animaciones 

			// parametros de efetos 
			fade - efecto de desbanecido
			explote - efecto de explotar
			blind - efecto de barrido hacia arriba
			slide - efecto de barrido hacia la izquierda
			drop - efecto de barrido hacia la izquierda con degradado
			fold - efecto de barrido de arriba hacia abajo
			puff - efecto del cielo
			scale - efecto pequeño a grande y biseversa
			shake - efecto de movimiento y desaparece

		});
		*/

		$('.elemento').draggable();


		//redimensionar

		$('.elemento').resizable();

		// seleciona elementos

		//$('.listaJuegos').selectable();

		// selecionar y ordenar elementos
		var seleccion = $(".listaJuegos");
		var listaPosition = new Array();
		var listaLi = seleccion[0].children;
		seleccion.sortable({
			update: function(event, ui){
				console.log("Has cambiado la posicion " + event + " " + ui);
			}
		});
		for(let i in seleccion[0].children){
			let element = seleccion[0].children[i].textContent;
			if (typeof element == 'string') {
				listaPosition.push(element);
			}
		}

		console.log("Position: " + listaPosition);
		console.log("Lista Li: " + listaLi);

		// Drop
		$("#elemento-movido").draggable();
		$("#area").droppable({
			drop: function () {
				$("#area").css("background", "orange");
				console.log("hay algo dentro de area");
			}
		});

		// Efectos y Animaciones

		$('#mostrar').click(function(){
			$('.caja-Efectos').toggle("fold", 3000);
		});









	});

});