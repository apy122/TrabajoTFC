const nodemailer= require("nodemailer");
import * as dotenv from "dotenv"; // 

dotenv.config();

//establece conexion
const transporter = nodemailer.createTransport({
  service: "gmail",
  //tipo de servicio
  host: process.env.host_email,
  //puerto donde va a operar
  port: parseInt(process.env.puerto_email as string),
  //tipo de seguridad 465(SSL) o 587(TLS)
  secure: process.env.puerto_email === "465",
  auth: {
    user: process.env.usuario_email,
    pass: process.env.password_email,
  },
});

export default transporter;
