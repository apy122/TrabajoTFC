import express from 'express';
import CiudadController from '../controllers/CiudadController.js';
export const router = express.Router();

//definir rutas
router.get('/', CiudadController.getCiudades)

//exportar rutas
export default{
    router,
}