class Vista {
    constructor() {
        //this.stack[];
    }

    /**
     * 
     * @param {*} plantilla: Template con el contenido a mostrar
     * @param {*} destino : Area donde se cargara el template
     * /**@param {*} pantalla:
     */
    mostrarPlantilla(plantilla, destino) {
        let dest = document.getElementById(destino);
        dest.innerHTML = "";
        let template = document.getElementById(plantilla);
        if (template) {
            let clon = template.content.cloneNode(true);
            dest.appendChild(clon);
        }
    }
    limpiarArea(areaDeTrabajo) {
        document.getElementById(areaDeTrabajo).innerHTML
    }


    /**
     * Lee el contenido de los inputs dentro de una etiqueta <form>
     * valida que existan datos en todos los campos
     * Los devuelve como un objeto al que incluye una bandera que indica si los datos son válidos
     * y un mensaje de error si no se ingresaron datos
     * @param {str} formUsuario: id del formulario a leer 
     * @returns {obj} data: objeto con los datos del formulario
     */
    getForm(formUsuario) {
        let form = document.getElementById(formUsuario);
        let datos = new FormData(form);
        let data = {};
        data.ok = true; //Bandera para indicar si los datos son válidos
        data.msj = "";  //Mensaje de error si no se ingresaron datos

        datos.forEach((value, key) => {
            data[key] = value;
            if (value == "" || (form[key].tagName === 'SELECT' && value == "0")) {
                data.ok = false;
                data.msj = "No hay datos en " + key;
                this.mostrarMensaje(false, data.msj);
            }
        });

        return data;
    }

    /**
     * Despliega un mensaje de error por tres segundos
     * @param {bool} ok: bandera que indica si el mensaje es de error o de éxito
     * @param {str} mensaje: texto del mensaje a desplegar
     */
    mostrarMensaje(ok, mensaje) {
        // Crear el elemento del mensaje
        let mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.id = 'mensaje-error'; // Para poder eliminarlo después
        mensajeDiv.style.position = 'absolute';
        mensajeDiv.style.width = '70%';
        mensajeDiv.style.height = '5%'
        mensajeDiv.style.right = '10%';
        mensajeDiv.style.bottom = '20%';
        mensajeDiv.innerHTML = mensaje
        if (ok) {
            mensajeDiv.style.backgroundColor = 'green';
        }
        else {
            mensajeDiv.style.backgroundColor = 'red';
        }
        mensajeDiv.style.color = 'white';
        mensajeDiv.style.textAlign = 'center';
        mensajeDiv.style.padding = '10px';
        mensajeDiv.style.borderRadius = '10px';

        // Mostrar el mensaje
        document.getElementById('contenido').appendChild(mensajeDiv);

        // Eliminar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }


    /**avanzarPantalla(pantalla){
        this.stack.push(pantalla);
        this.mostrarPantalla()
    }*/

}  