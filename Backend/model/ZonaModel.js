class ZonaModel {
    constructor(id, nombre, fk_ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.fk_ciudad = fk_ciudad;
    }
    getid() {
        return this.id;
    }
    setid(id) {
        this.id = id;
    }
    getnombre() {
        return this.nombre;
    }
    setnombre(nombre) {
        this.nombre = nombre;
    }
    getfk_ciudad() {
        return this.fk_ciudad;
    }
    setfk_ciudad(fk_ciudad) {
        this.fk_ciudad = fk_ciudad;
    }
}
export default ZonaModel;