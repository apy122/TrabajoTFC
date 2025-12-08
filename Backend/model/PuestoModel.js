class PuestoModel{
   constructor(id, nombre, fk_categoria, fk_mercado, fk_cliente, jefe){
        this.id = id;
        this.nombre = nombre;
        this.fk_categoria = fk_categoria;
        this.fk_mercado = fk_mercado;
        this.fk_cliente = fk_cliente;
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
   getFkCategoria(){
        return this.fk_categoria;
   }
   setFkCategoria(fk_categoria){
        this.fk_categoria = fk_categoria;
   }
   getFkMercado(){
        return this.fk_mercado;
   }
   setFkMercado(fk_mercado){
        this.fk_mercado = fk_mercado;
   }
   getFkCliente(){
        return this.fk_cliente;
   }
   setFkCliente(fk_cliente){
        this.fk_cliente = fk_cliente;
   }
}
export default PuestoModel;