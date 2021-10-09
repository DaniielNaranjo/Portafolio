'use strict'

window.addEventListener("load", () => {

	// Comprobar si Jquery esta cargado
	$(document).ready(()=>{
	console.log("Jquery Cargado");
	});

	//Selector de ID
	 $("#rojo").css("background", "red")
			   .css("color", "white");

	 $("#amarillo").css("background", "yellow")
				   .css("color", "orange");

	 $("#verde").css("background", "green")
			   .css("color", "white");


	/* Selector de Clases

	.eq(1) - seleciona la clase indicada.
	.addClass('clase') - agrega una clase a la etiqueta indicada.
	.hasClass('clase') - comprueba si exite la clase.
	.toggleClass('Aqui va la clase');  para añadir la clase en caso de que no exista o eliminarla en caso de que exista.

	*/ 
	$(".clase").css("padding", "6px");
			  

	$(".sinBorde").click(function() {
		console.log("Click dado");
		$(this).addClass('clase');
	});		


	//Selectores de etiqueta
	var spans = $('.spans');

	spans.click(function() {
		$(this).toggleClass('grande');
		
	})

	/*
		Selectores de atributo
	*/
    $('[title|="Google"]').css('background', 'orange');
    $('[title|="Facebook"]').css('background', 'blue');
    $('[title|="YouTube"]').css('background', 'red');


    // Otros
    // $('p', 'a').addClass('margen-superior');
    // .find("nombreclase") - Busca una clase indicada
    // .parent() - salta entre etiquetas(se deviuelve)

	var busqueda = $("#elemento2").parent().parent().find('.resaltado');

	console.log(busqueda);
});                                   