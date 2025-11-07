//Aqui va la clase Usuario
class Usuario {
    constructor(id, nombre, apellido, email,rol, puesto) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        //Rol usuario, trabajador o jefe
        this.rol = rol;
        //Puesto asignado al usuario, trabajador o jefe
        this.puesto = puesto;
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getTurno() {
        return this.rol;
    }
    setTurno(rol) {
        this.rol = rol;
    }
    getPuesto() {
        return this.puesto;
    }
    setPuesto(puesto) {
        this.puesto = puesto;
    }
}
export default Usuario;