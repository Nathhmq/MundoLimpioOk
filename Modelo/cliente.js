class Cliente extends Connect {
    constructor() {
        super();
        this.id_usuario = 0;
        this.nombre = "";
        this.correo = "";
        this.celular = "";
        this.tipo = "";
        this.password = "";
    }

    setData(data) {
        this.id_usuario = data.id_cliente;
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.celular = data.celular;
        this.tipo = data.tipo;
        this.password = data.password; //Solo para registro
    }

    getData() {
        return {
            id: this.id,
            name: this.nombre,
            email: this.correo,
            tipo: this.tipo
        };
    }


    //Metodo para verificar login
    login(dataReq, loginCallback) {
        const endpoint = 'user/login';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //Metodo para registrar un usuario tipo cliente
    register(dataReq, loginCallback) {
        const endpoint = 'clientes/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //Metodo para desactivar una cuenta
    defuse(dataReq, loginCallback) {
        const endpoint = 'clientes';
        const method = 'PATCH';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //Metodo para Actualizar un numero de telefono
    cambiarCelular(dataReq, loginCallback) {
        const endpoint = 'clientes/celular';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //Metodo para Actualizar el nombre de usuario
    cambiarNombre(dataReq, loginCallback) {
        const endpoint = 'clientes/nombre';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //Metodo para Actualizar la contraseña
    cambiarPassword(dataReq, loginCallback) {
        const endpoint = 'clientes/password';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //metodo para ingresar datos en la tabla de recoleccion
    recolectar(dataReq, loginCallback) {
        const endpoint = 'recolecciones/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //metodo para insertar datos en la tabla de materiales
    recolectarMaterial(dataReq, loginCallback) {
        const endpoint = 'recolecciones/registerMaterials';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    //metodo para mostrar los datos  que el cliente tiene en recoleccion
    historial(dataReq, loginCallback) {
        const endpoint = `recolecciones/historial/${dataReq}`;
        const method = 'GET';
        this.connect({}, endpoint, method, loginCallback);
    }
}