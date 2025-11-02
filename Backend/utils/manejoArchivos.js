import fs from "fs";
import path from "path";
const ruta= "C:\\Backend\\data\\usuarios.json"

export function leerUsuarios() {
  if (!fs.existsSync(ruta)) return [];
  const data = fs.readFileSync(ruta, "utf-8") || "[]";
  return JSON.parse(data);
}