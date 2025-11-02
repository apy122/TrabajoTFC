//Aqui va la clase Usuario
class Usuario {
    constructor(id, nombre, apellido, email,turno) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.turno = turno;

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
        return this.turno;
    }
    setTurno(turno) {
        this.turno = turno;
    }
}