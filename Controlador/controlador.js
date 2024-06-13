vista = new Vista()
usuario = new Cliente()
empresa = new Empresa()


window.addEventListener('load', function () {
    vista.mostrarPlantilla('paginaInicio', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
});

function mostrarInicioUsuario() {
    vista.mostrarPlantilla('login', 'contenido');
    vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
};

function ingresar() {
    let req = vista.getForm('formLogin');
    if (req.ok) {
        //Validar datos en la tabla clientes o empresas
        usuario.login(req, function (data) {
            if (data.success) {
                if (data.cant == 0) {
                    vista.mostrarMensaje(false, "Usuario o contraseña incorrectos");
                    return;
                }
                let usuario1 = data.data[0]
                //Redirigir a la pantalla correspondiente
                if (usuario1.tipo == 'cliente') {
                    usuario.setData(usuario1);
                    localStorage.setItem("email", req.correo);
                    localStorage.setItem("password", req.password);
                    localStorage.setItem("nombre", usuario1.nombre);
                    localStorage.setItem("celular", usuario1.celular);
                    mostrarMenuUsuario();
                } else {
                    empresa.setData(usuario1);
                    mostrarMenuEmpresa();
                }
            } else {
                vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
            }
        });
    }
}

function crearUsuario() {
    //leer datos de formulario
    let data = vista.getForm("formRegistroUsuario");
    //si ok, enviar datos al servidor y mostrar plantillas
    if (data.ok) {
        usuario.register(data, function (data) {
            //verificar si respuesta ok
            if (data.success) {
                vista.mostrarPlantilla('login', 'contenido');
                vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
                vista.mostrarMensaje(true, "Usuario creado.")

            } else {
                vista.mostrarMensaje(false, "El cliente no se pudo crear.")
            }

        })

    }
};

function crearEmpresa() {
    //leer datos de formulario
    let data = vista.getForm("formularioEmpresas");
    //si ok, enviar datos al servidor y mostrar plantillas
    if (data.ok) {
        empresa.register(data, function (data) {
            //verificar si respuesta ok
            if (data.success) {
                vista.mostrarPlantilla('login', 'contenido');
                vista.mostrarPlantilla('pieDePagina1', 'pieDePagina');
                vista.mostrarMensaje(true, "Empresa creada.")

            } else {
                vista.mostrarMensaje(false, "La empresa no se pudo crear.")
            }

        })

    }
};

function registrarUsuario() {
    vista.mostrarPlantilla('formRegisUsuario', 'contenido');
}

function registarEmpresa() {
    vista.mostrarPlantilla('formularioEmpresa', 'contenido');
};


function mostrarMenuUsuario() {
    vista.mostrarPlantilla('menuDeUsuario', 'contenido');
    const btnMenuLateral = document.getElementById('btnMenuLateral');

    btnMenuLateral.addEventListener('click', () => {
        menuLateral.classList.add('active');

    });
};

function mostrarNotificaciones() {
    vista.mostrarPlantilla('notificaciones', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Notificaciones";
}
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

    const selectElement = document.getElementById('categoriaMateria');
        const descripcionElement = document.getElementById('descripcion');

        // Descripciones para cada opción
        const descripciones = {
            plastico: "Botellas de agua, envases de alimentos, bolsas de plastico y envases de detergentes",
            carton: "Cajas de carton.",
            papel: "Periodicos, revistas y papel de oficina.",
            metales: "Latas de aluminio, latas de acero y envases de metal",
            textiles: "Ropa y ropa de cama",
            vidrio: "Botellas de vidrio, frascos y tarros."
        };

        // Actualiza la descripción según la opción seleccionada
        selectElement.addEventListener('change', function() {
            const selectedValue = selectElement.value;
            descripcionElement.textContent = descripciones[selectedValue] || '';
        });

        // Inicializa con la primera descripción
        descripcionElement.textContent = descripciones[selectElement.value];
};

function mostrarPerfilUsuario() {
    vista.mostrarPlantilla('perfilUsuario', 'contenido');

    var labelNombre = document.getElementById("labelNombre");
    labelNombre.innerHTML = localStorage.getItem("nombre");

    var inputEmail = document.getElementById("correoElectronico");
    inputEmail.placeholder = localStorage.getItem("email");

    var inputPassword = document.getElementById("CambiarPass");
    inputPassword.placeholder = localStorage.getItem("password");

    var inputCelular = document.getElementById("cambiarTel");
    inputCelular.placeholder = localStorage.getItem("celular");


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
    }
};

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
//-------------------------------CONTROLADOR MODALES-------------------------------------

//------------------------------Menú Lateral Izquierdo-----------------------------------------
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
    const btnCerrarSesion = document.getElementById('btnCerrarSesion')
    const closeModal = () => {
        menuLateral.classList.remove('active');
    };
    btnPerfilUsuario.addEventListener('click', closeModal);
    btnConfiguracion.addEventListener('click', closeModal);
    btnAyuda.addEventListener('click', closeModal);
    btnCerrarSesion.addEventListener('click', closeModal);

    window.onclick = function (event) {
        if (event.target == menuLateral) {
            menuLateral.style.display = "none";
        }
    };
});

//-----------------------------Modal Cerrar Sesión-----------------------------------
var modalCerrarSesion = document.getElementById("modalCerrarSesion"); // Obtener el modal
var btnCerrarSesion = document.getElementById("btnCerrarSesion");// Obtener el botón que abre el modal
// Obtener los botones dentro del modal
var botonAceptar = document.getElementById("botonAceptar");
var botonCancelar = document.getElementById("botonCancelar");
btnCerrarSesion.onclick = function () {// Cuando se hace clic en el botón, abrir el modal 
    modalCerrarSesion.style.display = "block";
}
botonAceptar.onclick = function () {// Cuando se hace clic en el botón de aceptar, realizar alguna acción (aquí puedes agregar tu lógica)
    vista.mostrarPlantilla('paginaInicio', 'contenido');// Por ejemplo, podrías mostrar un mensaje de confirmación
    modalCerrarSesion.style.display = "none"; // Cerrar el modal después de la acción
}
botonCancelar.onclick = function () {
    modalCerrarSesion.style.display = "none";
}
// Cuando se hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modalCerrarSesion) {
        modalCerrarSesion.style.display = "block";
    }
};
