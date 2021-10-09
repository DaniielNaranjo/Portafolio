'use strict'

window.addEventListener("load", ()=>{

// Fetch (ajax) y peticiones a sercios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_unico = document.querySelector("#unico");
var div_profesor = document.querySelector("#profesor");


//Creamos peticion fech y introducimos la url de la api
	getUsuarios()
	//Capturamos y convertimos los datos a formato JSON
	.then(data => data.json())
	//Creamos variable para poder utilizar los datos
	.then(users => {

		// introducimos los datos en la funcion	
		listadoUsuarios(users.data);

		
		return getInfo();

		})
		.then(data => {
		  	div_profesor.innerHTML = data;

			return getUnico();

		  }).then(data => data.json())
		  .then(unico => {

		  	listadoUnico(unico.data);
		  		
		  })
		  //captura los errores
		  .catch(error => {
		  	alert("Error en las peticiones");
		  });



//Peticiones Fetch a APIS 
 function getUsuarios() {
 	 	return fetch('https://reqres.in/api/users');
 }

 function getUnico() {
 	 	return fetch('https://reqres.in/api/users/2');
 }	  

//Crear promesas 
 function getInfo(){
 	var profesor = {
 		nombre: "Harol Daniel",
 		apellidos: "Naranjo Yunez",
 		url: 'https://github.com/DaniielNaranjo/Portafolio'
		};

	// Creamos un objecto promesa - resolve verdadero - reject falso
 	return new Promise((resolve, reject) => {

		var profesor_String = "";

		setTimeout(() => {
			profesor_String = JSON.stringify(profesor);

			if(typeof profesor_String != 'string' || profesor_String == "") return reject("Error");

			return resolve(profesor_String);

		}, 5000);		
 	});
 	
 }


//Funciones Logica y mostrar en pantalla
 function listadoUsuarios(usuarios) {
    	//con el arreglo invocamos el metodo map para reocrrer la api
    	usuarios.map((user, i) =>{
    	let parrafo = document.createElement("h2");
    	let avatar = document.createElement("img");
	    	parrafo.innerHTML = i + " " + user.first_name + " " + user.last_name;
	    	avatar.src = user.avatar;
	    	avatar.width = "100";

	    	div_usuarios.append(parrafo);
	    	div_usuarios.appendChild(avatar);

	    	document.querySelector(".cargando").style.display = "none";
    	});
    }
 function listadoUnico(unico) {
    	let parrafo = document.createElement("h2");
    	let avatar = document.createElement("img");
    	parrafo.innerHTML = "1 " + unico.first_name + " " + unico.last_name;
    	avatar.src = unico.avatar;
    	avatar.width = "100";

    	div_unico.append(parrafo);
    	div_unico.appendChild(avatar);
		document.querySelector("#unico .cargando").style.display = "none";
    }



});