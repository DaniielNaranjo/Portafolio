'use strict'

window.addEventListener("load", () =>{
	//Prueba tu codigo
	try{
		var year = 2021;
		alert(year);

		//captura errores o malisias en la url
		console.log(decodeURIComponent("https://www.google.com/"));

	//captura tu codigo
	}catch(error){
		alert("Internal server error: " + error);
	}
	
});