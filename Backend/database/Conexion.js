import dotenv from "dotenv"
import mysql from "mysql"

dotenv.config();
//Aqui se conecta con lo que queramos
export const conexion= async()=>{
    try{
         const trueCon=await mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password
        })
        console.log("conexion establecida")
        return trueCon    
    
    }catch(error){
        console.log(error)
        throw new Error("No se pudo conectar con la base de datos")
    }
}
export default conexion;