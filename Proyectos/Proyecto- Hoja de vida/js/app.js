'use strict'

/*Mostrar y ocultar menu*/

const navtoggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navtoggle.addEventListener('click', () =>{
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        navtoggle.setAttribute("arial-label", "Cerrar menu")
    }else{
        navtoggle.setAttribute("arial-label", "Abrir menu")
    }
});

/*Efecto scroll en menu */

window.addEventListener('scroll', ()=>{
    const header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0)
});

/*Particle*/

