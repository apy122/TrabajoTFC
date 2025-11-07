import fs from "fs";

//funcion para leer json
export function leerJson(ruta) {
    try {
        const data = fs.readFileSync(ruta, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return null;
    }
}

//funcion para escribir json
export function escribirJson(ruta, datos) {
    try {
        fs.writeFileSync(ruta, JSON.stringify(datos, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error al escribir el archivo:', error);
        return false;
    }
}