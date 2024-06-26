vista = new Vista()
usuario = new Cliente()
empresa = new Empresa()
materia = new Materia()
let listaEmpresas = []
let listaMateria = []
let materialsData = []
let listaMateriaRecoleccion = []

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
                if (data.data.length == 0) {
                    vista.mostrarMensaje(false, 'Usuario o contraseña incorrectos');
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
                    localStorage.setItem("id", usuario1.id_cliente);
                    mostrarMenuUsuario();
                } else {
                    empresa.setData(usuario1);
                    localStorage.setItem("email", req.correo);
                    localStorage.setItem("password", req.password);
                    localStorage.setItem("nombreEmpresa", usuario1.nombre);
                    localStorage.setItem("nombreEmpresa", usuario1.nombre);
                    localStorage.setItem("celular", usuario1.celular);
                    localStorage.setItem("id", usuario1.id_cliente);
                    mostrarMenuEmpresa();
                }
            } else {
                vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
            }
        });
    } else {
        // Mostrar mensaje de error si los datos no son válidos
        vista.mostrarMensaje(false, req.msj);
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
                vista.mostrarMensaje(false, 'El cliente no se pudo crear.')
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
                vista.mostrarMensaje(true, "Empresa creada.")

            } else {
                vista.mostrarMensaje(false, 'La empresa no se pudo crear.')
            }

        })

    }
};

function listarEmpresas() {
    empresa.listarEmpresas(function (data) {
        if (data.success) {
            //Recorrer la data y adaptar la estructura al metodo mostrarTarjetas de la clase Vista
            dataView = []
            data.data.forEach(element => {
                let empresa = {}
                empresa.title = element.nombre_empresa;
                empresa.subTitle = element.nombre_encargado;
                empresa.paragraph = 'Dirección:&emsp;&emsp;' + element.direccion +
                    '<br>Teléfono:&emsp;&emsp;' + element.telefono + '<br>Correo E:&emsp;&emsp;' + element.correo;
                empresa.function = 'mostrarEmpresa(' + element.NIT + ')';
                dataView.push(empresa);

            });
            vista.limpiarArea("contenido1")
            vista.mostrarPlantilla('encabezado1', 'encabezado');
            document.getElementById("tituloEncabezado").innerText = "Empresas";
            vista.mostrarTarjetas('Listado de Empresas Recolectoras', dataView, 'contenido1');
            listaEmpresas = data.data
        } else {
            console.log('Error al listar empresas');
        }
    });
}

function mostrarEmpresa(nit) {
    empresa.mostrarEmpresa(nit, function (data) {
        if (data.success) {
            vista.mostrarUnaTarjeta('Empresa Recolectora', data.data[0], 'contenido1');
        } else {
            console.log('Error al mostrar empresa');
        }
    });
}

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
};

function mostrarMenuEmpresa() {
    vista.mostrarPlantilla('menuDeEmpresa', 'contenido');
    const btnMenuLateral = document.getElementById('btnMenuLateral');

    btnMenuLateral.addEventListener('click', () => {
        menuLateral.classList.add('active');
    });
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
    empresa.listarEmpresas(function (data) {
        if (data.success) {
            listaEmpresas = data.data
            vista.crearSelect(listaEmpresas, "selectEmpresa", ["id_empresa", "nombre_empresa",]);
        }
    });
    materia.materias(function (data) {
        if (data.success) {
            listaMateria = data.data
            vista.crearSelect(listaMateria, "selectMateria", ["id_materia", "nombre_materia",]);
        }
    });
    listaMateriaRecoleccion = [];
};

// Función para registrar una recolección
function recolectar() {
    if (listaMateriaRecoleccion.length > 0) {
        // Asignar el ID del cliente actual (asumo que usuario.id_usuario está definido correctamente)
        data = vista.getForm("formSolicitarEnvio")
        if (data.ok) {
            data.id_cliente = usuario.id_usuario;
            // Llamar al método recolectar del usuario (cliente) para enviar la solicitud al backend
            usuario.recolectar(data, function (res) {
                if (res.success) {
                    listaMateriaRecoleccion.forEach((mat) => mat.id_recoleccion = res.data.id_recoleccion);
                    vista.mostrarMensaje(true, 'Solicitud de recolección registrada correctamente');
                    // Después de registrar la recolección, registrar los materiales
                    usuario.recolectarMaterial(listaMateriaRecoleccion, function (materialRes) {
                        if (materialRes.success) {
                            vista.mostrarMensaje(true, 'Solicitud de recolección registrada');
                            // Limpiar el formulario o realizar cualquier otra acción necesaria después del registro
                            vista.mostrarPlantilla('solicitarEnvios', 'contenido');
                            vista.mostrarPlantilla('encabezado1', 'encabezado');
                            document.getElementById("tituloEncabezado").innerText = "Mis Envíos";
                        } else {
                            vista.mostrarMensaje(false, "Error al registrar los materiales de la recolección");
                        }
                    });
                } else {
                    vista.mostrarMensaje(false, "Error al solicitar recolección");
                }
            });
        }
    }
    else {
        vista.mostrarMensaje(false, "Debe seleccionar material")
    }
}

function agregarOtroMaterial() {
    let materiaSelect = document.getElementById("selectMateria");
    let cantidadInput = document.getElementById("cantidadMateria");

    // Obtener el texto y el valor del select de materia prima
    let materiaTexto = materiaSelect.options[materiaSelect.selectedIndex].text;
    let materiaValor = materiaSelect.value;
    let cantidadValor = cantidadInput.value;
    listaMateriaRecoleccion.push({ "id_materia": materiaValor, "cantidad_kg": cantidadValor });
    // Verificar si se seleccionó una materia válida y se ingresó una cantidad
    if (materiaValor !== "0" && cantidadValor > 0) {
        let tabla = document.getElementById("tablaMateriales").getElementsByTagName('tbody')[0];

        // Crear una nueva fila
        let nuevaFila = tabla.insertRow();

        // Crear celdas para la materia y la cantidad
        let celdaMateria = nuevaFila.insertCell(0);
        let celdaCantidad = nuevaFila.insertCell(1);

        // Asignar el texto a las celdas
        celdaMateria.innerText = materiaTexto;
        celdaCantidad.innerText = cantidadValor;

        // Limpiar los campos de materia y cantidad
        materiaSelect.value = "0";
        cantidadInput.value = "";
    } else {
        vista.mostrarMensaje(false, "Por favor, seleccione una materia prima");
    }
}

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

    //Modal Eliminar Cuenta
    var modalEliminarCuenta = document.getElementById("modalEliminarCuenta");
    var btnEliminarCuenta = document.getElementById("btnEliminarCuenta");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");
    var botonCancelarEliminar = document.getElementById("botonCancelarEliminar");

    btnEliminarCuenta.onclick = function () {
        modalEliminarCuenta.style.display = "block";
    }

    /*
    botonAceptarEliminar.onclick = function () {
        alert("Cuenta eliminada");
        modalEliminarCuenta.style.display = "none";
    }
*/
    botonCancelarEliminar.onclick = function () {
        modalEliminarCuenta.style.display = "none";
    }

    //Modal Cambiar Telefono
    var modalCambiarTelefono = document.getElementById("modalCambiarTelefono");
    var btnCambiarTelefono = document.getElementById("btnCambiarTelefono");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarTelefono.onclick = function () {
        modalCambiarTelefono.style.display = "block";
    }

    //Modal Cambiar nombre
    var modalCambiarNombre = document.getElementById("modalCambiarNombre");
    var btnCambiarNombre = document.getElementById("btnCambiarNombre");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarNombre.onclick = function () {
        modalCambiarNombre.style.display = "block";
    }

    //Modal Cambiar Contraseña
    var modalCambiarContrasena = document.getElementById("modalCambiarContrasena");
    var btnCambiarContrasena = document.getElementById("btnCambiarContrasena");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarContrasena.onclick = function () {
        modalCambiarContrasena.style.display = "block";
    }

    // Cerrar el modal si se hace clic fuera de cualquiera de los dos modales
    window.onclick = function (event) {
        if (event.target == modalEliminarCuenta) {
            modalEliminarCuenta.style.display = "none";
        }
        if (event.target == modalCambiarTelefono) {
            modalCambiarTelefono.style.display = "none";
        }
        if (event.target == modalCambiarNombre) {
            modalCambiarNombre.style.display = "none";
        }
        if (event.target == modalCambiarContrasena) {
            modalCambiarContrasena.style.display = "none";
        }
    }
};

function desactivarCliente() {
    //Recuperar el id cliente
    data = {
        "id_cliente": usuario.id_usuario
    }

    //ejecutar el metodo en el modelo
    usuario.defuse(data, function (data) {
        //avisar 
        modalEliminarCuenta.style.display = "none";
        vista.mostrarMensaje(true, 'Cuenta eliminada');

        setTimeout(function () {
            vista.mostrarPlantilla('paginaInicio', 'contenido');
        }, 4000);
    });

}

function cambiarCelularUsuario() {
    //Leer los datos del formulario 
    let data = vista.getForm('formCambiartelefono');
    //Recuperar el id cliente
    data.id_cliente = usuario.id_usuario;
    //Actualizar el objeto empresa 
    usuario.setData(data);
    //Modificar en la base de datos 
    if (data.ok) {
        usuario.cambiarCelular(data, function (data) {
            modalCambiarTelefono.style.display = "none";
            if (data.success) {
                vista.mostrarMensaje(true, 'Teléfono actualizado correctamente');
                document.getElementById('formCambiartelefono').reset();
            } else {
                vista.mostrarMensaje(false, 'Error al actualizar el teléfono');
            }
        }
        );
    }
}

function cambiarNombreUsuario() {
    //Leer los datos del formulario 
    let data = vista.getForm('formCambiarNombre');
    //Recuperar el id cliente
    data.id_cliente = usuario.id_usuario;
    //Actualizar el objeto empresa 
    usuario.setData(data);
    //Modificar en la base de datos 
    if (data.ok) {
        usuario.cambiarNombre(data, function (data) {
            modalCambiarNombre.style.display = "none";
            if (data.success) {
                vista.mostrarMensaje(true, 'Nombre actualizado correctamente');
                document.getElementById('formCambiarNombre').reset();
            } else {
                vista.mostrarMensaje(false, 'Error al actualizar el nombre');
            }
        }
        );
    }
}

function cambiarContraseñaUsuario() {
    //Leer los datos del formulario 
    let data = vista.getForm('formCambiarContrasena');
    //Recuperar el id cliente
    data.id_cliente = usuario.id_usuario;
    //Actualizar el objeto empresa 
    usuario.setData(data);
    //Modificar en la base de datos 
    if (data.ok) {
        usuario.cambiarPassword(data, function (data) {
            modalCambiarContrasena.style.display = "none";
            if (data.success) {
                vista.mostrarMensaje(true, 'Contraseña actualizada correctamente');
                document.getElementById('formCambiarContrasena').reset();
            } else {
                vista.mostrarMensaje(false, 'Error al actualizar la contraseña');
            }
        }
        );
    }
}

function mostrarSobreNosotros() {
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

function mostrarDiferenciado() {
    vista.mostrarPlantilla('diferenciado', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿En qué se diferencia Mundo Limpio?";
}

function mostrarPrivacidad() {
    vista.mostrarPlantilla('privacidad', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "¿Cómo protege mi privacidad y mi información?";
}

// Función para mostrar el historial de envíos
function listarRecolecciones() {
    usuario.historial(usuario.id_usuario, function (data) {
        if (data.success) {
            // Recorrer la data y adaptar la estructura al método mostrarTarjetas de la clase Vista
            let dataView = [];
            data.data.forEach(element => {
                let recoleccion = {};
                recoleccion.title = 'Recolección ID: ' + element.id_recoleccion;
                recoleccion.subTitle = element.fecha;
                recoleccion.paragraph = 'Ubicación: ' + element.ubicacion +
                    '<br>Materia: ' + element.nombre_materia +
                    '<br>Cantidad: ' + element.cantidad_kg + ' Kg';
                recoleccion.function = 'mostrarRecoleccion(' + element.id_recoleccion + ')';
                dataView.push(recoleccion);
            });

            // Limpiar el área y mostrar las tarjetas
            vista.mostrarPlantilla('encabezado1', 'encabezado');
            document.getElementById("tituloEncabezado").innerText = "Historial de Recolecciones";
            vista.mostrarTarjetas1('Listado de Recolecciones', dataView, 'contenido1');
        } else {
            console.log('Error al listar recolecciones');
            vista.mostrarMensaje(false, "Error al cargar el historial de recolecciones");
        }
    });
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


//----------------------------------------------------CONTROLADOR PANTALLAS EMPRESA---------------------------------
function mostrarConfigeEmpresa() {
    vista.mostrarPlantilla('configuracionEmpresa', 'contenido');
    vista.mostrarPlantilla('encabezado1', 'encabezado');
    document.getElementById("tituloEncabezado").innerText = "Configuración";
}

function mostrarPerfilEmpresa() {
    vista.mostrarPlantilla('perfilEmpresa', 'contenido');

    var labelNombre = document.getElementById("labelNombre");
    labelNombre.innerHTML = localStorage.getItem("nombre");

    var inputEmail = document.getElementById("correoElectronico");
    inputEmail.placeholder = localStorage.getItem("email");

    var inputPassword = document.getElementById("CambiarPass");
    inputPassword.placeholder = localStorage.getItem("password");

    var inputCelular = document.getElementById("cambiarTel");
    inputCelular.placeholder = localStorage.getItem("celular");

    //Modal Eliminar Cuenta
    var modalEliminarCuenta = document.getElementById("modalEliminarCuenta");
    var btnEliminarCuenta = document.getElementById("btnEliminarCuenta");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");
    var botonCancelarEliminar = document.getElementById("botonCancelarEliminar");

    btnEliminarCuenta.onclick = function () {
        modalEliminarCuenta.style.display = "block";
    }

    /*
    botonAceptarEliminar.onclick = function () {
        alert("Cuenta eliminada");
        modalEliminarCuenta.style.display = "none";
    }
*/
    botonCancelarEliminar.onclick = function () {
        modalEliminarCuenta.style.display = "none";
    }

    //Modal Cambiar Telefono
    var modalCambiarTelefono = document.getElementById("modalCambiarTelefono");
    var btnCambiarTelefono = document.getElementById("btnCambiarTelefono");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarTelefono.onclick = function () {
        modalCambiarTelefono.style.display = "block";
    }

    //Modal Cambiar nombre
    var modalCambiarNombre = document.getElementById("modalCambiarNombre");
    var btnCambiarNombre = document.getElementById("btnCambiarNombre");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarNombre.onclick = function () {
        modalCambiarNombre.style.display = "block";
    }

    //Modal Cambiar Contraseña
    var modalCambiarContrasena = document.getElementById("modalCambiarContrasena");
    var btnCambiarContrasena = document.getElementById("btnCambiarContrasena");
    //var botonAceptarEliminar = document.getElementById("botonAceptarEliminar");

    btnCambiarContrasena.onclick = function () {
        modalCambiarContrasena.style.display = "block";
    }

    // Cerrar el modal si se hace clic fuera de cualquiera de los dos modales
    window.onclick = function (event) {
        if (event.target == modalEliminarCuenta) {
            modalEliminarCuenta.style.display = "none";
        }
        if (event.target == modalCambiarTelefono) {
            modalCambiarTelefono.style.display = "none";
        }
        if (event.target == modalCambiarNombre) {
            modalCambiarNombre.style.display = "none";
        }
        if (event.target == modalCambiarContrasena) {
            modalCambiarContrasena.style.display = "none";
        }
    }
};