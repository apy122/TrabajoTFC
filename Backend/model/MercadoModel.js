class MercadoModel{
    constructor(id, nombre, fk_zona){
        this.id = id;
        this.nombre = nombre;
        this.fk_zona = fk_zona;
    }
    getid(){
        return this.id;
    }
    setid(id){
        this.id = id;
    }
    getnombre(){
        return this.nombre;
    }
    setnombre(nombre){
        this.nombre = nombre;
    }
    getfk_zona(){
        return this.fk_zona;
    }
    setfk_zona(fk_zona){
        this.fk_zona = fk_zona;
    }
}
export default MercadoModel;