// Importar dependencias
import express from "express";
import cors from "cors";
import { config } from "dotenv"; // <-- CAMBIO 1: Importar 'config'
//import {conexion} from "./database/Conexion.js"

// Ejecutar la configuración de dotenv para cargar el .env
config();
// conexion a donde toca
//conexion();

// Crear servidor
const app = express();

// Acceder al puerto usando process.env.PUERTO
const port = process.env.puerto // <-- CAMBIO 2: Acceder vía process.env

// Configurar CORS
app.use(cors());

// Convertir datos del body a objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar rutas (más adelante se añaden con app.use('/api', rutas))

// Endpoint de prueba
app.get("/",(req, res)=>{
    console.log("ruta raiz llamada");
    return res.status(200).send(
        {
            curso: "hola",
            mensaje: "Easter egg"
        }
    )
})

//endpoint en /pruebas
app.get("/pruebas", (req, res)=>{
    console.log("Ejecutada endpoint de prueba");
    return res.status(200).send(
        `<section>
            <h1>Bienvenido</h1>
        </section>`
    )
})

//endpoint en /pruebas
app.get("/pruebas", (req, res)=>{
    console.log("Ejecutada endpoint de prueba");
    return res.status(200).send(
        `<section>
            <h1>Bienvenido</h1>
        </section>`
    )
    
})

// Servidor en escucha
app.listen(port, () => {
  console.log("Servidor corriendo correctamente en el puerto: " + port);
});
