import axios from "axios";
import { useState } from "react";
import { ESTIMADOS_URL } from "../api_routes/apiRoutes";

export const useEstimado = () => {
  const [dataEstimado, setDataEstimado] = useState([]);
  const [visibleEstimados, setVisibleEstimados] = useState(false);

  const getAllEstimados = async () => {
    try {
      const response = await axios.get(`${ESTIMADOS_URL}/filteredByWeekSP`);
      setDataEstimado(response.data);
    } catch (error) {
      console.error(error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  const setEstimadosVisible = () => {
    setVisibleEstimados(!visibleEstimados);
  };

  return {
    dataEstimado,
    getAllEstimados,
    visibleEstimados,
    setEstimadosVisible,
  };
};
