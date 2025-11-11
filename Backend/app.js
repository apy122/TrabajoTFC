// Importar dependencias
import express from "express";
import cors from "cors";
import dotenv from "dotenv"

// Crear servidor
const app = express();
const port = process.env.puerto
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
