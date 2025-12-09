// Importar dependencias
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conexion } from "./database/Conexion.js";
import PuestoRoutes from "./routes/PuestoRoutes.js";
import router from "./routes/PuestoRoutes.js";

// Ejecutar la configuración de dotenv para cargar el .env
dotenv.config();
// conexion a donde toca
try {
  await conexion.authenticate();
  console.log("Conexion establecida");
} catch (error) {
  console.error("Error en la conexion: " + error);
}

// Crear servidor
const app = express();

// Acceder al puerto usando process.env.PUERTO
const port = process.env.puerto;

// Configurar CORS
app.use(cors());

// Convertir datos del body a objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint de prueba real
app.use("/puestos/puestosZona", PuestoRoutes.router);

// Servidor en escucha
app.listen(port, () => {
  console.log("Servidor corriendo correctamente en el puerto: " + port);
});
