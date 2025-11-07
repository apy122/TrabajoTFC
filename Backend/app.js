// --- IMPORTACIONES ---
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

//cargar variables .env
dotenv.config();

//configuracion frontend
function configurarFrontend(app, rutaFrontendRelativa) {
  //obtener la ruta actual
  const __filename = fileURLToPath(import.meta.url);
  //convertir url en ruta normal
  const __dirname = path.dirname(__filename);

  //convertir a  ruta absoluta del frontend
  const rutaFrontend = path.resolve(__dirname, "..", rutaFrontendRelativa);

  //servir archivos estáticos
  app.use(express.static(rutaFrontend));

  //capturar el index en la carpeta
  app.get("*", (req, res) => {
    res.sendFile(path.join(rutaFrontend, "index.html"));
  });

  console.log(`Cargado el index.html`);
}

//configurar Servidor
function configurarServidor() {
  const app = express();

  //middleware para parsear JSON en peticiones HTTP
  app.use(express.json());

  //middleware para permitir peticiones desde el Frontend
  app.use(cors());

  //aquí rutas de los apis
  

  //configurar frontend
  configurarFrontend(app, process.env.FRONT_URL);

  console.log("Servidor configurado correctamente");
  return app;
}

//iniciar servidor
function iniciarServidor() {
  const app = configurarServidor();
  const PORT = process.env.PUERTO || 3000;

  app.listen(PORT, () => {
    console.log(`Corriendo Servidor`);
  });
}

//ejecucion
iniciarServidor();
