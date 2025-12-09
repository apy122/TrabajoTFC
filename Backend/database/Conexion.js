import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();
//Aqui se conecta con lo que queramos
const database = process.env.database;
const user = process.env.user;
const password = process.env.password;
const hostType = process.env.host;
const dialectType = process.env.dialect;

//Iniciamos sequilize
export const conexion = new Sequelize(database, user, password, {
  host: hostType,
  dialect: dialectType,
  logging: console.log,
});
export default conexion