import { Sequelize } from "sequelize";

const ciudad= Sequelize.define('ciudad',{
    id:{type: Sequelize.SMALLINT, primarykey: true},
    nombre: Sequelize.STRING
});