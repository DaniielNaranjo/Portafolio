'use strict'

window.addEventListener("load", () => {
	console.log("DOM cargado.!!");

	//Seleccionamos el formulario y la caja de resultados
	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");

	//Esconder caja de resultado
	box_dashed.style.display = "none";
	
	//Evento submit 
	formulario.addEventListener("submit", (event) => {
		//quitar acciones por defecto
		event.preventDefault();

		//traer datos de los input
		var Nombre = document.querySelector("#nombre").value;
		var Apellido = document.querySelector("#apellido").value;
		var Edad = parseInt(document.querySelector("#edad").value);


		if(Nombre.trim() == null || Nombre.trim().length == 0){
			alert("El nombre no es valido o esta vacio");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			document.querySelector("#nombre").style.border = "2px solid red";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
			document.querySelector("#nombre").style.border = "1px solid grey";
		}

		if(Apellido.trim() == null || Apellido.trim().length == 0){
			alert("El apellido no es valido o esta vacio");
			document.querySelector("#error_apellido").innerHTML = "El apellido no es valido";
			document.querySelector("#apellido").style.border = "2px solid red";
			return false;
		}else{
			document.querySelector("#error_apellido").style.display = "none";
			document.querySelector("#apellido").style.border = "1px solid grey";
		}

		if(Edad <= 0 || Edad == null || isNaN(Edad)){
			alert("La edad no es valido ");
			document.querySelector("#error_edad").innerHTML = "la edad no es valida";
			document.querySelector("#edad").style.border = "2px solid red";
			return false;
		}else{
			document.querySelector("#error_edad").style.display = "none";
			document.querySelector("#edad").style.border = "1px solid grey";
		}



		//Mostrar caja de resultado
		box_dashed.style.display = "block";

		//Incluir datos en un array (usando {} deja mostrar la propedad y con [] no);
		var datos_usuario = {Nombre, Apellido, Edad};

		/*
			Creamos un bucle para recorrer el array
			de los datos del usuario, creamos un 
			createElement para introducir los datos
			en parrafos y introducirlos en la caja
			de resultado mostrandolos en pantalla
		*/

		for(let indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(indice + ": " + datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
	});

});