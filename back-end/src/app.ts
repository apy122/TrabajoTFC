import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

// cargar variables de entorno
dotenv.config();
const port = process.env.puerto;

//configuracion de cors
/*const opcionesCors : cors.CorsOptions = {

};*/


const app = express();


// middlewares
app.use(cors(/*opcionesCors*/));
app.use(express.json());
// rutas
app.get("/", (_req: Request, res: Response) => {
  res.send("API de gestión de tareas");
});

// arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});