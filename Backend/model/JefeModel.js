class JefeModel{
    constructor(id, nombre, fk_puesto){
        this.id = id;
        this.nombre = nombre;
        this.fk_puesto = fk_puesto;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getFkPuesto(){
        return this.fk_puesto;
    }
    setFkPuesto(fk_puesto){
        this.fk_puesto = fk_puesto;
    }
}