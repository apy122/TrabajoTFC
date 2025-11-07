//Logica de usuario

//importar variables env
import dotenv from "dotenv";
dotenv.config();

//funciones para manejar la logica de usuario
import { leerJson, escribirJson } from "../utils/manejoArchivos.js";

export async function crearUsuario() {
    //escribir JSON
}
export async function listarUsuarios(){
    //lista usuarios activos
}
export async function eliminarUsuarioExpirado(){
    //elimina usuarios expirados
}
export { crearUsuario, listarUsuarios, eliminarUsuarioExpirado };