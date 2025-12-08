//Aqui va la clase Usuario
class ClienteModel{
   constructor(id, nombre, apellido, email){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
    getid(){
        return this.id;
    }CategoriaModel
    setid(id){
        this.id = id;
    }
    getnombre(){
        return this.nombre;
    }
    setnombre(nombre){
        this.nombre = nombre;
   }
   getapellido(){
        return this.apellido;
    }
    setapellido(apellido){
        this.apellido = apellido;
   }
   getemail(){
        return this.email;
    }
    setemail(email){
        this.email = email;
   }
}
export default ClienteModel;