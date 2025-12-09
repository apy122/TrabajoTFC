import ciudadModel from "../model/CiudadModel.js";

export const getCiudades = async (req, res) => {
  try {
    const ciudades = await ciudadModel.findAll();
    res.status(200).json(ciudades);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving puestos",
      error: error.message,
    });
  }
};
export default {
  getCiudades,
};
