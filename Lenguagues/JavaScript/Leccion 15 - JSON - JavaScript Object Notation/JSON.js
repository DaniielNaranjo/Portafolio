'use strict'

// JSON - JavaScript Object Notation

window.addEventListener("load", ()=> {

var videoJuego = {
	titulo: "God of War: Rangarok",
	año: 2021,
	pais: "Estado Unidos (USA)"
};

var videoJuegos = [
	{titulo: "Halo Infinite", año: 2021, pais: "Estado Unidos (USA)"},
	{titulo: "Grand the Auto VI", año: 2022, pais: "Estado Unidos (USA)"},
	{titulo: "Fall Out New Vegas", año: 2008, pais: "Estado Unidos (USA)"},
	{titulo: "Black Mesa", año: 2015, pais: "Estado Unidos (USA)"},
	{titulo: "Morai", año: 2016, pais: "Australia"},
	videoJuego
];

console.log(videoJuegos);
var caja = document.querySelector("#caja");


for(let index in videoJuegos){
	var elemento = document.createElement("p");
	elemento.append(videoJuegos[index].titulo + " - " + videoJuegos[index].año + " - " + videoJuegos[index].pais);
	caja.append(elemento);
}


});