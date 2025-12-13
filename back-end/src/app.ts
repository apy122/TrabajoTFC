import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

// cargar variables de entorno
dotenv.config();
const port = process.env.puerto;

//configuracion de cors
const opcionesCors : cors.CorsOptions = {
  origin: [process.env.cors_principal as string, process.env.cors_usuario as string, process.env.cors_admin as string],
  methods: ["GET", "POST", "PUT", ],
  allowedHeaders: ["Content-Type", "Authorization"]
};


const app = express();


// middlewares
app.use(cors(opcionesCors));
app.use(express.json());

// arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
