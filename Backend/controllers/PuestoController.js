import PuestoModel from '../model/PuestoModel.js';

export const getPuestos = async (req, res) => {
    try {
        const puestos = await PuestoModel.findAll();
        res.json(puestos);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving puestos', error });
    }
};

export default {
    getPuestos,
};