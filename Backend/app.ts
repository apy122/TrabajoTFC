// Importar dependencias
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Ejecutar la configuración de dotenv para cargar el .env
dotenv.config();

// conexion a donde toca


// Crear servidor
const app = express();

// Acceder al puerto usando process.env.PUERTO
const port = process.env.puerto;

// Configurar CORS
app.use(cors());

// Convertir datos del body a objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints

// Servidor en escucha
app.listen(port, () => {
  console.log("Servidor corriendo correctamente en el puerto: " + port);
});
