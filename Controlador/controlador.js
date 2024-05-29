vista = new Vista()

window.addEventListener('load', function () {
    vista.mostrarPlantilla('paginaInicio', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
});

function mostrarInicioUsuario() {
    vista.mostrarPlantilla('login', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');

}

function mostrarInicioEmpresa() {
    vista.mostrarPlantilla('loginEmpresa', 'contenido');
}

function registrarUsuario() {
    vista.mostrarPlantilla('formRegisUsuario', 'contenido');
}

function registarEmpresa() {
    vista.mostrarPlantilla('formularioEmpresa', 'contenido');
}

function login() {
    //leer datos del formlario
    //data=
    //consultar datos en la bd
    //si existe desplegar ele menu de usuario
    mostrarMenuUsuario();
    //si no existe mostrar mensaje
}
function mostrarMenuUsuario() {
    vista.mostrarPlantilla('menuDeUsuario', 'contenido');
    const btnMenuLateral = document.getElementById('btnMenuLateral');
    const btnNotificationes = document.getElementById('btnNotificationes');

    btnMenuLateral.addEventListener('click', () => {
        menuLateral.classList.add('active');
    });
    btnNotificationes.addEventListener('click', () => {
        modalNotificaciones.classList.add('active');
    });
}





function mostrarMenuEmpresa() {
    vista.mostrarPlantilla('menuDeEmpresa', 'contenido');
}

function mostrarEmpresas() {
    vista.mostrarPlantilla('listaEmpresa', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Empresas";
}

function mostrarMapa() {
    vista.mostrarPlantilla('mapaLimpio', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mapa Limpio";
}

function mostrarCalendario() {
    vista.mostrarPlantilla('calendario', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Calendario";
}

function mostrarAprenderReciclar() {
    vista.mostrarPlantilla('aprendeReciclar', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Aprende a Reciclar";
    const btnCloseMenu = document.getElementById('flechaAtras');
}

function mostrarEnvios() {
    vista.mostrarPlantilla('solicitarEnvios', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Mis Envíos";
}

function mostrarPerfilUsuario() {
    vista.mostrarPlantilla('perfilUsuario', 'contenido');
}

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

document.addEventListener('DOMContentLoaded', (event) => {
    const btnNotificationes = document.getElementById('btnNotificationes');
    const btnCloseModalNotificaciones = document.getElementById('flechaAtras');

    btnNotificationes.addEventListener('click', () => {
      modalNotificaciones.classList.add('active');
    });

    btnCloseModalNotificaciones.addEventListener('click', () => {
        modalNotificaciones.classList.remove('active');
    });
});