var enlace = "#aling";
var desplegable = "#menu-phone";
var despliegaClase = "menu-mobile";

function nav(){
    var enla = document.querySelector(enlace);
    enla.addEventListener("click", DespliegaMenu, false);
}

function DespliegaMenu(e){
    e.preventDefault();
    var despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();

function ValidarEmail(evento){
    evento.preventDefault();


    var email = document.querySelector("#email").value;
    var mensaje = document.querySelector("#mensaje");
    var error;

    error = "Rellena el campo vacio"

    mensaje.innerHTML = error;

    console.log(error);

var access = document.querySelectorAll("access");

access.addEventListener("submit", ValidarEmail);
}
