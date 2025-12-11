// ...existing code...
import { DataTypes } from "sequelize";
import conexion from "../database/Conexion.js";

export const ciudadModel = conexion.define(
  "ciudad",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ciudad",
    freezeTableName: true, 
    timestamps: false,
    schema: "public",
  });


export default ciudadModel;
