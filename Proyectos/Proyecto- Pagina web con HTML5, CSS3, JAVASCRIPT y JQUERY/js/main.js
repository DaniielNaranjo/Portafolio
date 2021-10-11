'use strict'

window.addEventListener("load", () =>{
	$(document).ready(function(){
		console.log("Jquery Cargado")

		// slider
		if(window.location.href.indexOf('index') > -1){
			$('.galeria').bxSlider({
   			mode: 'fade',
    		captions: true,
    		slideWidth: screen.availWidth,
    		responsive: true
  			});

		}
		
		//Posts 
		if(window.location.href.indexOf('index') > -1){
			var fecha = moment().locale("es").format('MMMM dddd YYYY, h:mm:ss a');
		var posts = [
			{title: 'Prueba de titulo1',
			 date: 'Publicado: ' + fecha,
			 content: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.'},
			{title: 'Prueba de titulo2',
			 date: 'Publicado: ' + fecha,
			 content: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.'},
			 {title: 'Prueba de titulo3',
			 date: 'Publicado: ' + fecha,
			 content: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.'}
		]

		posts.forEach((item,index) =>{
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="buttonMore">Leer Mas</a>
				</article>
			`;

			$('#posts').append(post);
		});
		}
		


		//Selector de tema

		var theme = $("#theme");

		$('#to-green').click(function(){
			theme.attr("href", "css/green.css")
		});
		$('#to-red').click(function(){
			theme.attr("href", "css/red.css")
		});
		$('#to-blue').click(function(){
			theme.attr("href", "css/blue.css")
		});

		// Scroll Subir arriba

		var Scrollsubir = $('.subir');

		Scrollsubir.click(function(event){
			event.preventDefault();
			$('html , body').animate({
				scrollTop : 0
			}, 500);

			return false;
		});

		//login falso 
		if(window.location.href.indexOf('index') > -1){
			$('#login form').submit(function(){
			let form_name = $('#form_name').val();
			let form_email = $('#form_email').val();
			let form_password = $('#form_password').val();

			localStorage.setItem("form_name", form_name);
			localStorage.setItem("form_email", form_email);
			localStorage.setItem("form_password", form_password);

			console.log(form_name);
		    console.log(form_email);
		    console.log(form_password);

		});

		var name = localStorage.getItem('form_name');
		var email = localStorage.getItem('form_email');
		var password = localStorage.getItem('form_password');



		if(name != null && name != "undefined" && email != null && email != "undefined" && password != null && password != "undefined"){
			$('#loginDatos').css("display", "block")
			$('#loginDatos').html("<strong><hr> <br> Bienvenido: </strong>" + name + " <br> <br> <strong> Datos <br>  </strong>" + "Email: " + email + "<br> contraseña: " + password + "<br> <br> <br>");
			$('#loginDatos').append("<a href='#' id='loginOut'>Cerrar Sesion</a>")
			$('#login').hide();

			$('#loginOut').click(function(){
				localStorage.clear();
				location.reload();
			});
			}
		}
		

		//Acordeon 
		if(window.location.href.indexOf('about') > -1){
			$("#acordeon").accordion();
		}


	});
})