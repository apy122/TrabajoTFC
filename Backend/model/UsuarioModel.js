class UsuarioModel{
   constructor(id, nombre, email, fk_puesto, jefe){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
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
   getEmail(){
        return this.email;
   }
   setEmail(email){
        this.email = email;
   }
   getFkPuesto(){
        return this.fk_puesto;
   }
   setFkPuesto(fk_puesto){
        this.fk_puesto = fk_puesto;
   }
}

export default UsuarioModel;