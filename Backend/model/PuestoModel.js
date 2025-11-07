class puestos{
    constructor(id, nombre, categoria, posicionTurno, jefe, productos = [], turnos = []) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.posicionTurno = posicionTurno;
        this.jefe = jefe;
        // Asegurarse de que productos y turnos sean siempre arrays
        this.productos = Array.isArray(productos) ? productos : [];
        this.turnos = Array.isArray(turnos) ? turnos : [];
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
    agregarProducto(nombre, descripcion, precio, stock) {
        const nuevoProducto = {
            id: this.productos.length + 1,
            nombre,
            descripcion,
            precio,
            stock
        };
        this.productos.push(nuevoProducto);
    }
    eliminarProducto(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }
    actualizarStock(productoId, nuevoStock) {
        const producto = this.productos.find(producto => producto.id === productoId);
        if (producto) {
            producto.stock = nuevoStock;
        }
    }
    sumarTurno(turno) {
        this.turnos.push(turno);
    }
}
export default puestos;