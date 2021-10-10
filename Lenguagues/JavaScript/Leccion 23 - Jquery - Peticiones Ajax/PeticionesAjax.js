'use strict'

window.addEventListener("load", () => {

	 $(document).ready(function(){
	 	console.log("Jquery Listo");

	 	/*
			Metodo Load
	 	*/

	 	$('#cajaMetodoLoad').load("https://jsonplaceholder.typicode.com/posts");

	 	/*
			Metodo Get 
	 	*/

	 	$.get("https://reqres.in/api/users", {page: 2}, function(response){
	 		response.data.forEach((elemento, index) => {
	 			$("#cajaMetodoGet").append("<p>"+ index + " " + elemento.first_name + " " + elemento.last_name + "</p>");
	 		});
	 	});

	 	/*
			Metodo Post
	 	*/

	 	$('#formPost').submit(function(evento){
	 		evento.preventDefault();

	 		var usuario = {
	 		name: $('#nombrePost').val(),
	 		web: $('#webPost').val()
	 		}
	 		
	 		
	 		$.post("https://reqres.in/api/users", usuario, function(response){
	 			mostrarPost(response, $('#cajaMetodoPost'));
	 		}).done(function(){
	 			alert("Usuario Creado Correctamente")
	 		});
	 	});
	 	
	 	/*
			$.Ajax - otro metodo de peticion asincrona
	 	*/
	 	
	 	$('#formAjax').submit(function(event){
	 		event.preventDefault();

	 		var usuarioAjax = {
	 		name: $('#nombreAjax').val(),
	 		web: $('#webAjax').val()
	 		};

	 		$.ajax({
	 		type: 'POST',
	 		url: 'https://reqres.in/api/users',
	 		data: usuarioAjax,
	 		beforeSend: function(){
	 			console.log("Enviando Usuario");
	 		},
	 		success: function(response){
	 			mostrarPost(response, $('#cajaMetodoAjax'));
	 		},
	 		error: function(){
	 			console.log("Internal Server Error");
	 		},
	 		timeout: 2000
	 		});
	 	});
	 	
	 	//Funciones 

	 	function mostrarPost(response, div) {
	 		for(let i in response){
	 				div.append("<p>" + i + ": " + response[i] + "</p>");
	 			}
	 	}


	 });

});