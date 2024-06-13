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

}