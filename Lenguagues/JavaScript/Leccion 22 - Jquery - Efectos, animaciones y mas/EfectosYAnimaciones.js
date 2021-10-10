'use strict'

window.addEventListener("load", () =>{

	$(document).ready(function(){
		console.log("Jquery Cargado");

		/*
			ForEch, Evento Click y Incrustacion de texto al DOM 
		*/
		//creamos la variable que contiene el ID
		var buttonUrl = $('#buttonUrl');
		reloadLinks();

		// creamos funcion para que nos muestre el link
		function reloadLinks() {
		let a = $('a');
		a.each(function(indice){
			var that = $(this);
			var enlace = that.attr("href");

			//agregar atributo 
			that.attr('target' , '_black');

	 		that.text(enlace);
		});
		//console.log(a.length);
		}

		//Creamos el evento para incrustar el link a la lista 
		buttonUrl.click(function(){
			var addUrl = $('#addUrl');

			if(addUrl.val().length > 0){
				$('#listaUrl').append('<li><a href="' + addUrl.val() +'"></a></li>');
				addUrl.val('');
				reloadLinks();
			}else{
				alert("El input text esta vacio");
			}
			
		});


		/*
				Efectos 

			.hide() - oculta el div;
			.show() - muestra el div;
			.fadeIn() - muestra y hace degradado
			.fadeOut() - oculta y se desbanese
			.fadeTo('slow', 0); - oculta o aparece con trassion pero puedes indicarle la opacida
			.fadeToggle('fast'); - muestra y se oculta en modo desvanecido
			.slideToggle('fast'); - muestra y se oculta en modo cortina



			propiedades de hide y show

			fast - hace un trassion rapida
			normal - hace una trassion normal
			slow - hace una trassin lenta

		*/

		var cajaEfectos = $('#cajaEfectos');
		var buttonMostrar = $('#buttonMostrar');
		var buttonOcultar = $('#buttonOcultar');

		buttonMostrar.hide();

		//Primera forma - dos botones
		buttonMostrar.click(function (){
			$(this).hide();
			buttonOcultar.show();
			cajaEfectos.fadeTo('slow', 0.8);
		});

		buttonOcultar.click(function (){
			buttonMostrar.show();
			buttonOcultar.hide();
			cajaEfectos.fadeTo('slow', 0.2);
		});

		//Segunda forma - dos funciones un boton
		//Se pueden integrar funciones callback a los efectos como se muestra 

		$('#todoEnUno').click(function(){
										//funcion callback para mostra por consola si el cartel se oculto
			cajaEfectos.slideToggle('fast', () =>{
				console.log("cartel ocultado");
			});

			
		});


		/*
			Animaciones Personalizadas
			.animate({background: 'red', fontSize: '20px'}, 'fast') - Crear Animaciones al gusto usando Css (Se pueden concatenar animaciones)
		*/

		var cajaAnimacion = $('#cajaAnimacion');

		$('#buttonAnimame').click(function (){
			cajaAnimacion.animate({marginLeft: '500px', 
								   fontSize: '40px',
								   height: '100px'}, 'slow')
						 .animate({
						 	borderRadius: '900px',
						 	marginTop: '100px'
						 }, 'slow')
						 .animate({
						 	borderRadius: '0px',
						 	marginLeft: '1px'
						 }, 'slow')
						 .animate({
						 	marginTop: '20px',
						 	fontSize: '25px',
						 	height: '50px'
						 	 }, 'slow')

		});







	});

	

});