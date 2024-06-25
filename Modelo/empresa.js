class Empresa extends Connect {
    constructor() {
        super();
        this.id_empresa = 0;
        this.nombre_encargado = '';
        this.nombre_empresa = '';
        this.NIT = '';
        this.telefono = '';
        this.direccion = '';
        this.correo = '';
        this.password = '';
    }

    //Establece los atributos de la clase 
    setData(data) {
        this.id_empresa = data.id_empresa;
        this.nombre_encargado = data.nombre_encargado;
        this.nombre_empresa = data.nombre_empresa;
        this.NIT = data.NIT;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.correo = data.correo;
        this.password = data.password;
    }

    //Retorna un objeto con los atributos de la clase 
    getData() {
        return {
            id_empresa: parseInt(this.id_empresa),
            nombre_empresa: this.nombre_empresa,
            nombre_encargado: this.nombre_encargado,
            NIT: this.NIT,
            telefono: this.telefono,
            direccion: this.direccion,
            correo: this.correo
        };
    }

    //Listar todas las empresas 
    listarEmpresas(callback) {
        const endpoint = 'empresas';
        const method = 'GET';
        this.connect({}, endpoint, method, callback);
    }

    //Datos de una empresa, por nit 
    mostrarEmpresa(nit, callback) {
        const endpoint = 'empresas?nit=' + nit;
        const method = 'GET';
        this.connect({}, endpoint, method, callback);
    }

    //Datos de una empresa, por PK 
    consultarEmpresa(id_empresa, callback) {
        const endpoint = 'empresas/' + id_empresa;
        const method = 'GET';
        this.connect({}, endpoint, method, callback);
    }

    //Edita campos de una empresa por PK 
    editarEmpresa(dataReq, callback) {
        const endpoint = 'empresas';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, callback);
    }

    //Metodo para registrar un usuario tipo empresa
    register(dataReq, loginCallback) {
        const endpoint = 'empresas/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    empresas(dataReq, loginCallback) {
        const endpoint = 'user/empresas';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, loginCallback);
    }
}
