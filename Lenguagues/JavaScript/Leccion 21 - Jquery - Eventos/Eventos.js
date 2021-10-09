'use strict'

window.addEventListener("load", () => {

	 $(document).ready(() =>{
	 	console.log("JQUERY CARGADO");
	 })

	 /*
		Evento MouseOver y MouseOut

	*/

	 var cajaHover = $('#cajaHover');

	 cajaHover.mouseover(function(){
	 	$(this).css("background", "blue");
	 });

	 cajaHover.mouseout(function(){
	 	$(this).css("background", "orange");
	 });

	

	 /*
		Evento Hover 
	 */
	  var cajaOverYOut = $('#cajaOverYOut');

	 function cambiaVerde() {
	 	$(this).css("background", "green");
	 }
	 function cambiaRojo() {
	 	$(this).css("background", "red");
	 }

	 cajaOverYOut.hover(cambiaVerde,cambiaRojo);


	 /*
		Evento Click y  Doble Click
	 */

	 var cajaClick = $('#cajaClick');
	 var cajaDobleClick = $('#cajaDobleClick');

	 cajaClick.click(function(){
	 	 $(this).css("background", "gray");
	 });

	 cajaDobleClick.dblclick(function(){
	 	$(this).css("background", "black");
	 })

	 /*
		Evento Focus y Blur
	 */

	 var nombre = $('#nombre');
	 var datos = $('#datos');

	 nombre.focus(function(){
	 	$(this).css("border", "2px solid green").css('outline', '0');;
	 });

	 nombre.blur(function(){
	 	let that = $(this);

	 	that.css("border", "2px solid blue");
	 	datos.text(that.val()).show();
	 });

	 /*
		Evento MouseDown y MouseUp
	 */

	 datos.mousedown(function(){
	 	$(this).css("border-color", "blue");
	 });

	 datos.mouseup(function(){
	 	$(this).css("border-color", "black");
	 });

	 /*
		Evento MouseMove
	 */

	 $(document).mousemove(function(){
	 	let cajaMove = $("#cajaMove");
	 	$('html').css("cursor", "none");
	 	console.log("En X: " + event.clientX); // Horisontal
	 	console.log("En Y: " +event.clientY); // Vertical
	 	cajaMove.css("left", event.clientX ).css("top", event.clientY);

	 	
	 	
	 });




});