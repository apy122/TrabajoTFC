const dotenv = require("dotenv");
dotenv.config();

// carga de dependencias
const express = require("express");
const cors = require("cors");
import type { Request, Response } from "express";


const app = express();
const port = process.env.puerto;

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.get("/", (req: Request, res: Response) => {
  res.send("API de gestión de tareas");
});

// arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});