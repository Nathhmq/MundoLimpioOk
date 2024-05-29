//-----VENTANAS MODALES-----
// Obtener el modal
var modal = document.getElementById("miModal");

// Obtener el botón que abre el modal
var ExitBtn = document.getElementById("ExitBtn");

// Obtener los botones dentro del modal
var botonAceptar = document.getElementById("botonAceptar");
var botonCancelar = document.getElementById("botonCancelar");

// Cuando se hace clic en el botón, abrir el modal 
ExitBtn.onclick = function () {
    modal.style.display = "block";
}

// Cuando se hace clic en el botón de aceptar, realizar alguna acción (aquí puedes agregar tu lógica)
botonAceptar.onclick = function () {
    // Por ejemplo, podrías mostrar un mensaje de confirmación
    alert("Acción aceptada");
    modal.style.display = "none"; // Cerrar el modal después de la acción
}

// Cuando se hace clic en el botón de cancelar, cerrar el modal
botonCancelar.onclick = function () {
    modal.style.display = "none";
}

// Cuando se hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*---------------------------------------------------------------------Modificarcontraseña*/
var modalCambiarContrasena = document.getElementById("modalCambiarContrasena");
var btnCambiarContrasena = document.getElementById("btnCambiarContrasena");
var botonConfirmar = document.getElementById ("botonConfirmar");

btnCambiarContrasena.onclick = function () {
    modalCambiarContrasena.style.display = "block";
}

botonConfirmar.onclick = function () {
    alert("Contraseña cambiada");
    modalCambiarContrasena.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalCambiarContrasena) {
        modalCambiarContrasena.style.display = "none";
    }
}

/*-----------------------------------------------------------------------Mpdifitelefono*/

var modalCambiarTelefono = document.getElementById("modalCambiarTelefono");
var btnCambiarTelefono = document.getElementById("btnCambiarTelefono");
var botonConfirmarTelefono = document.getElementById ("botonConfirmarTelefono");

btnCambiarTelefono.onclick = function () {
    modalCambiarTelefono.style.display = "block";
}

botonConfirmarTelefono.onclick = function () {
    alert("Teléfono cambiado, validando datos sobre la existencia del mismo");
    modalCambiarTelefono.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalCambiarTelefono) {
        modalCambiarTelefono.style.display = "none";
    }
}


/*------------------------------------------------------------------------CambiarNombre*/

var modalCambiarNombre = document.getElementById("modalCambiarNombre");
var btnCambiarNombre = document.getElementById("btnCambiarNombre");
var botonConfirmarNombre = document.getElementById ("botonConfirmarNombre");

btnCambiarNombre.onclick = function () {
    modalCambiarNombre.style.display = "block";
}

botonConfirmarNombre.onclick = function () {
    alert("Nombre cambiado, validando datos sobre la existencia del mismo");
    modalCambiarNombre.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalCambiarNombre) {
        modalCambiarNombre.style.display = "none";
    }
}

/*------------------------------------------------------------------------menuLateralIzquierdo*/
if(document.getElementById("menuLateral")){
    var menuLateral=document.getElementById('menuLateral');
    var btnMenuLateral = document.getElementById("btnMenuLateral");
    var FlechaAtrasMenuLateral = document.querySelectorAll(".FlechaAtrasMenuLateral");

    btnMenuLateral.onclick=function(){
        menuLateral.classList.add("show");
        alert("hola")
    }

    FlechaAtrasMenuLateral.onlick=function(){
        menuLateral.classList.remove("show");
    }

}



/**var menuLateral = document.getElementById("menuLateral");
var btnMenuLateral = document.getElementById("btnMenuLateral");
var FlechaAtrasMenuLateral = document.querySelectorAll(".FlechaAtrasMenuLateral");

btnMenuLateral.onclick = function () {
    menuLateral.classList.add("mostrar");
    alert("Se ha mostrado el menú lateral")
}

FlechaAtrasMenuLateral.onclick = function () {
    menuLateral.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == menuLateral) {
        menuLateral.style.display = "none";
    }
}


/**btnMenuLateral.addEventListener("click", () => {
    menuLateral.classList.add("mostrar");
});

FlechaAtrasMenuLateral.addEventListener("click", () => {
    menuLateral.classList.remove("mostrar");
});





/**btnMenuLateral.onclick = function () {
    menuLateral.style.display = "block";
}

FlechaAtrasMenuLateral.onclick = function () {
    menuLateral.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == menuLateral) {
        menuLateral.style.display = "none";
    }
}*/

/*----------------------------------------------------------------------------manuNotificacionesLateralDerecho*/ 
/**var modalNotificaciones = document.getElementById("modalNotificaciones");
var btnNotificationes = document.getElementById("btnNotificationes");
var FlechaAtrasMenuLateral = document.querySelectorAll (".FlechaAtrasMenuLateral");

btnNotificationes.onclick = function () {
    modalNotificaciones.style.display = "block";
}

FlechaAtrasMenuLateral.onclick = function () {
    alert("Contraseña cambiada");
    modalNotificaciones.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalNotificaciones) {
        modalNotificaciones.style.display = "none";
    }
}**/
/*-------------------------------------------------------------modalRecuperarContrasena*/

/**var modalRecuperarContrasena = document.getElementById("modalRecuperarContrasena");
var recordar = document.getElementById("recordar");
var botonConfirmarRecuperar = document.getElementById ("botonConfirmarRecuperar");

recordar.onclick = function () {
    modalRecuperarContrasena.style.display = "block";
}

botonConfirmarRecuperar.onclick = function () {
    alert("Enviand solicitud de recuperacion de contraseña");
    modalRecuperarContrasena.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalRecuperarContrasena) {
        modalRecuperarContrasena.style.display = "none";
    }
}
**/

/*--------------------------------------------------------------modalRecuperarcontraseñaEmpresa*/
/***var modalRecuperarContrasenaEmpresa = document.getElementById("modalRecuperarContrasenaEmpresa");
var btnRecordarContrasena = document.getElementById("btnRecordarContrasena");
var botonConfirmarNombre = document.getElementById ("botonConfirmarNombre");

btnRecordarContrasena.onclick = function () {
    modalRecuperarContrasenaEmpresa.style.display = "block";
}

botonConfirmarNombre.onclick = function () {
    alert("Teléfono cambiado, validando datos sobre la existencia del mismo");
    modalRecuperarContrasenaEmpresa.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalRecuperarContrasenaEmpresa) {
        modalRecuperarContrasenaEmpresa.style.display = "none";
    }
}**/