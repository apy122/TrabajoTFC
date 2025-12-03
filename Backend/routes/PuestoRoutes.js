import express from 'express';
import PuestoController from '../controllers/PuestoController.js';
export const router = express.Router();

//definir rutas
router.get('/', PuestoController.getPuestos);

//exportar rutas
export default {
    router,
};