import Usuario from "./UsuarioModel";

class Usuario extends Usuario {
    constructor(nombre, apellidos, email, telefono, rol, puesto) {
        super(nombre, apellidos, email);
        this.telefono = telefono;
        this.rol= rol;
        this.puesto = puesto;
    }

    // Getters y setters
    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getRol(){
        return this.rol
    }
    setRol(rol){
        this.rol= rol;
    }

    getPuesto() {
        return this.puesto;
    }

    setPuesto(puesto) {
        this.puesto = puesto;
    }
}

export default Usuario;