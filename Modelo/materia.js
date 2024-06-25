class Materia extends Connect {
    constructor() {
        super();
        this.id_materia = 0;
        this.nombre_materia = '';
        this.descripcion = '';
    }

    //Establece los atributos de la clase 
    setData(data) {
        this.id_materia = data.id_materia;
        this.nombre_materia = data.nombre_materia;
        this.descripcion = data.descripcion;
    }

    //Retorna un objeto con los atributos de la clase 
    getData() {
        return {
            id_materia: parseInt(this.id_materia),
            nombre_materia: this.nombre_materia,
            descripcion: this.descripcion
        };
    }

    //Listar todas las materias 
    materias(callback) {
        const endpoint = 'recolecciones/listMateria';
        const method = 'GET';
        this.connect({}, endpoint, method, callback);
    }
}