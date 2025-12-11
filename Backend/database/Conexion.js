import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const basedatos = process.env.database;
const usuario = process.env.user;
const contrasena = process.env.password;
const hostType = process.env.host;
const dialecto = process.env.dialect;
const puerto = process.env.port;

export const conexion = new Sequelize(basedatos, usuario, contrasena, {
  host: hostType,
  port: puerto,
  dialect: dialecto,
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  
});
