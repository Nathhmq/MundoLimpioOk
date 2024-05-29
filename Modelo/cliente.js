class usuario extends Connect {
    constructor() {
        super();
        this.id_usuario = 0;
        this.nombre = "";
        this.correo = "";
        this.celular = "";
        this.fecha_nacimiento = "";
        this.tipo = "";
        this.password = "";
    }

    setData(data) {
        this.id_usuario = data.id_cliente;
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.celular = data.celular;
        this.fecha_nacimiento = data.fechaNacimiento;
        this.tipo = data.tipo;
        this.password = data.password; //Solo para registro
    }


    //Metodo para verificar login
    login(dataReq, loginCallback) {
        const endpoint = 'user/login';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }


}