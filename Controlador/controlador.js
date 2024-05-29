vista = new Vista()

window.addEventListener('load', function () {
    vista.mostrarPlantilla('paginaInicio', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
});

function mostrarInicioUsuario() {
    vista.mostrarPlantilla('login', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');

};

function mostrarInicioEmpresa() {
    vista.mostrarPlantilla('loginEmpresa', 'contenido');
};

function registrarUsuario() {
    vista.mostrarPlantilla('formRegisUsuario', 'contenido');
}

function registarEmpresa() {
    vista.mostrarPlantilla('formularioEmpresa', 'contenido');
};

function login() {
    //leer datos del formlario
    //data=
    //consultar datos en la bd
    //si existe desplegar ele menu de usuario
    mostrarMenuUsuario();
    //si no existe mostrar mensaje
};

function mostrarMenuUsuario() {
    vista.mostrarPlantilla('menuDeUsuario', 'contenido');
    const btnMenuLateral = document.getElementById('btnMenuLateral');

    btnMenuLateral.addEventListener('click', () => {
        menuLateral.classList.add('active');
    });
};

function mostrarMenuEmpresa() {
    vista.mostrarPlantilla('menuDeEmpresa', 'contenido');
};

function mostrarEmpresas() {
    vista.mostrarPlantilla('listaEmpresa', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Empresas";
};

function mostrarMapa() {
    vista.mostrarPlantilla('mapaLimpio', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mapa Limpio";
};

function mostrarCalendario() {
    vista.mostrarPlantilla('calendario', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Calendario";
};

function mostrarAprenderReciclar() {
    vista.mostrarPlantilla('aprendeReciclar', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Aprende a Reciclar";
};

function mostrarEnvios() {
    vista.mostrarPlantilla('solicitarEnvios', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mis Envíos";
};

function mostrarPerfilUsuario() {
    vista.mostrarPlantilla('perfilUsuario', 'contenido');
    var modalEliminarCuenta = document.getElementById("modalEliminarCuenta");
    var btnEliminarCuenta = document.getElementById("btnEliminarCuenta");
    var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");
    var botonCancelarEliminar = document.getElementById("botonCancelarEliminar");
    
    btnEliminarCuenta.onclick = function () {
        modalEliminarCuenta.style.display = "block";
    }
    
    botonAceptarEliminar.onclick = function () {
        alert("Cuenta eliminada");
        modalEliminarCuenta.style.display = "none";
    }
    
    botonCancelarEliminar.onclick = function () {
        modalEliminarCuenta.style.display = "none";
    }
    
    window.onclick = function (event) {
        if (event.target == modalEliminarCuenta) {
            modalEliminarCuenta.style.display = "none";
        }
    }};

function mostarSobreNosotros() {
    vista.mostrarPlantilla('mundoLimpio', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mundo Limpio";
}

function mostrarSoporte() {
    vista.mostrarPlantilla('preguntas', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿Necesitas Ayuda?";
}

function mostrarConfig() {
    vista.mostrarPlantilla('configuracion', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Configuración";
}

function mostrarFuncionamiento() {
    vista.mostrarPlantilla('funcionamiento', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Funcionamiento";
}

function mostrarComoHacerPQR() {
    vista.mostrarPlantilla('comoHacerPqr', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿Cómo realizar una PQR?";
}

function mostarDiferenciado() {
    vista.mostrarPlantilla('diferenciado', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿En qué se diferencia Mundo Limpio?";
}

function mostrarPrivacidad() {
    vista.mostrarPlantilla('privacidad', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿Cómo protege mi privacidad y mi información?";
}

function mostrarHistorialEnvios() {
    vista.mostrarPlantilla('historialEnvios', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mis Envíos";
}

function mostarSolicitudEnvios() {
    vista.mostrarPlantilla('solicitarEnvios', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mis Envíos";
}

function mostrarSolicitudRecolecciones() {
    vista.mostrarPlantilla('recolecionesSolicitudEmpresa', 'contenido');
}

function mostrarHistorialRecoleccion() {
    vista.mostrarPlantilla('recoleccionDetallesEmpresa', 'contenido');
}
//--------------------------CONTROLADOR MODALES-------------------------------------

//------------------------------Menú Lateral-----------------------------------------
document.addEventListener('DOMContentLoaded', (event) => {
    const btnCloseMenu = document.getElementById('flechaAtras');
    const menuLateral = document.getElementById('menuLateral');
    btnCloseMenu.addEventListener('click', () => {
        menuLateral.classList.remove('active');
    });
    // Cerrar el menú lateral al hacer clic en los botones de perfil, configuración y ayuda
    const btnPerfilUsuario = document.getElementById('btnPerfilUsuario');
    const btnConfiguracion = document.getElementById('btnConfiguracion');
    const btnAyuda = document.getElementById('btnAyuda');
    const closeModal = () => {
        menuLateral.classList.remove('active');
    };
    btnPerfilUsuario.addEventListener('click', closeModal);
    btnConfiguracion.addEventListener('click', closeModal);
    btnAyuda.addEventListener('click', closeModal);
});

//-----------------------------Modal Cerrar Sesión-----------------------------------
var modalCerrarSesion = document.getElementById("modalCerrarSesion"); // Obtener el modal
var btnCerrarSesion = document.getElementById("btnCerrarSesion");// Obtener el botón que abre el modal
// Obtener los botones dentro del modal
var botonAceptar = document.getElementById("botonAceptar");
var botonCancelar = document.getElementById("botonCancelar");
btnCerrarSesion.onclick = function () {// Cuando se hace clic en el botón, abrir el modal 
    modalPequeño.style.display = "block";
}
botonAceptar.onclick = function () {// Cuando se hace clic en el botón de aceptar, realizar alguna acción (aquí puedes agregar tu lógica)
    alert("Acción aceptada");// Por ejemplo, podrías mostrar un mensaje de confirmación
    modalCerrarSesion.style.display = "none"; // Cerrar el modal después de la acción
}
botonCancelar.onclick = function () {
    modalCerrarSesion.style.display = "none";
}
// Cuando se hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modalCerrarSesion) {
        modalCerrarSesion.style.display = "none";
    }};
