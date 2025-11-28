class Puesto{
    constructor(id, nombre, categoria, posicionTurno, jefe, productos = [], turnos = []) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.posicionTurno = posicionTurno;
        this.jefe = jefe;
        // Asegurarse de que productos y turnos sean siempre arrays
        this.productos = Array.isArray(productos) ? productos : [];
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
    getProductos() {
        return this.productos;
    }
    setProductos(productos) {
        this.productos = Array.isArray(productos) ? productos : [];
    }
    getTurnos() {
        return this.turnos;
    }
    setTurnos(turnos) {
        this.turnos = Array.isArray(turnos) ? turnos : [];
    }
}
