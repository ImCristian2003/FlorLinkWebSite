import axios from "axios";
import { OFRECIMIENTO_RESERVA_URL } from "../api_routes/apiRoutes";

export const getAllReservas = async () => {
  try {
    const response = await axios.get(OFRECIMIENTO_RESERVA_URL);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const saveReserva = async ({
  finca,
  nombre,
  grado,
  cliente,
  total_tallos,
  tipo_caja,
  observacion,
  vendedora,
  estado_reserva,
}) => {
  try {
    return await axios.post(OFRECIMIENTO_RESERVA_URL, {
      finca,
      nombre,
      grado,
      cliente,
      total_tallos,
      tipo_caja,
      observacion,
      vendedora,
      estado_reserva,
    });
  } catch (error) {
    console.error(error);
  }

  return undefined;
};

export const sendEmailReserva = async ({ emailUser, message }) => {
  try {
    return await axios.post(`${OFRECIMIENTO_RESERVA_URL}/sendReserva`, {
      emailUser,
      message,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteReserva = async ({ id }) => {
  try {
    await axios.delete(`${OFRECIMIENTO_RESERVA_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
