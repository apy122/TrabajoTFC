class Puesto{
    constructor(id, nombre, categoria, posicionTurno, jefe, productos = [], turnos = []) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.posicionTurno = posicionTurno;
        this.jefe = jefe;
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
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getPosicionTurno() {
        return this.posicionTurno;
    }
    setPosicionTurno(posicionTurno) {
        this.posicionTurno = posicionTurno;
    }
    getJefe() {
        return this.jefe;
    }
    setJefe(jefe) {
        this.jefe = jefe;
    }
    getTurnos() {
        return this.turnos;
    }
    setTurnos(turnos) {
        this.turnos = Array.isArray(turnos) ? turnos : [];
    }
}
