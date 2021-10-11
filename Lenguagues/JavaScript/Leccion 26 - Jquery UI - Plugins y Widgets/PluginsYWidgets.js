'use strict'

window.addEventListener("load", ()=>{

	$(document).ready(function(){
		console.log("Ready Jquery");



		/*
			Tooltip
			aparece en todo cuadro con el titulo puesto en una etiqueta 
		*/

		$(document).tooltip();

		/*
			Dialog
			aparece en todo cuadro con el titulo puesto en una etiqueta 
		*/


		$('#buttonSalir').click(function(){
			$('#popup').dialog();
		});


		/*
			datepicker
			aparece un calendario en el input seleccionado normalmente un tipo text 
		*/

		$('#calendario').datepicker();

		/*
			Tabs
			aparece un calendario en el input seleccionado normalmente un tipo text 
		*/

		$('#pestañas').tabs();

	})

})