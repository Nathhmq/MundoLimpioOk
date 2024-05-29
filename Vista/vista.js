class Vista{
    constructor(){
        //this.stack[];
    }

    /**
     * 
     * @param {*} plantilla: Template con el contenido a mostrar
     * @param {*} destino : Area donde se cargara el template
     * /**@param {*} pantalla:
     */
    mostrarPlantilla(plantilla, destino){
        let dest = document.getElementById(destino);
        dest.innerHTML = "";
        let template = document.getElementById(plantilla);
        if (template){
            let clon = template.content.cloneNode(true);
            dest.appendChild(clon);
        }
    }
    limpiarArea(areaDeTrabajo){
        document.getElementById(areaDeTrabajo).innerHTML
    }

    
    avanzarPantalla(pantalla){
        this.stack.push(pantalla);
        this.mostrarPantalla()
    }

    retrocederPantalla(){
        if  (this.stack.length >1) {
            this.stack.pop();
            let pantalla = [this.stack.length-1]
            this.mostrarPantalla(pantalla);
            }
    }

}  