import axios from "axios";
import { useState } from "react";
import { OFRECIMIENTO_URL } from "../api_routes/apiRoutes";

export const useOfrecimiento = () => {
  let resultsFiltered;

  const [dataOfrecimiento, setDataOfrecimiento] = useState([]);
  const [dataFincaDist, setDataFincaDist] = useState([]);
  const [dataGradoDist, setDataGradoDist] = useState([]);
  const [search, setSearch] = useState("");
  const [finca, setFinca] = useState("");
  const [grado, setGrado] = useState("");
  const [loading, setLoading] = useState(true);
  const [showNoches, setShowNoches] = useState(false);

  const getAllOfrecimiento = async () => {
    try {
      const response = await axios.get(`${OFRECIMIENTO_URL}/filteredByTallos`);
      setDataOfrecimiento(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onInputSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onInputFincaChange = (e) => {
    setFinca(e.target.value);
  };

  const onInputGradoChange = (e) => {
    setGrado(e.target.value);
  };

  const resetSearch = () => {
    setSearch("");
  };

  const getDataFilters = () => {
    setDataFincaDist([...new Set(dataOfrecimiento.map((d) => d.finca))].sort());
    setDataGradoDist([...new Set(dataOfrecimiento.map((d) => d.grado))].sort());
    console.log(dataFincaDist);
    console.log(dataGradoDist);
  };

  if (!search && !finca && !grado) {
    resultsFiltered = dataOfrecimiento;
  } else {
    resultsFiltered = dataOfrecimiento.filter((data) =>
      [
        data.nombre.toLowerCase().includes(search.toLowerCase()),
        data.finca.toLowerCase().includes(finca.toLowerCase()),
        data.grado.toLowerCase().includes(grado.toLowerCase()),
      ].every(Boolean)
    );
  }
  const setVisibleNoches = () => {
    setShowNoches(!showNoches);
  };

  return {
    dataOfrecimiento,
    getAllOfrecimiento,
    loading,
    showNoches,
    onInputSearchChange,
    onInputFincaChange,
    onInputGradoChange,
    setVisibleNoches,
    resultsFiltered,
    resetSearch,
    dataFincaDist,
    dataGradoDist,
    getDataFilters,
  };
};
