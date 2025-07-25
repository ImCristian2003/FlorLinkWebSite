import { useState } from "react";
import {
  EMPLEADO_URL,
  EVALUACION_URL,
  PREGUNTA_URL,
} from "../api_routes/apiRoutes";
import axios from "axios";

export const usePerformanceEvaluation = () => {
  const [visibleGrupoPrimarioL, setVisibleGrupoPrimarioL] = useState(false);
  const [visibleGrupoPrimarioE, setVisibleGrupoPrimarioE] = useState(false);
  const [visibleJefeColaborador, setVisibleJefeColaborador] = useState(false);
  const [visibleAutoevaluacion, setVisibleAutoevaluacion] = useState(false);
  const [visibleColaboradorJefe, setVisibleColaboradorJefe] = useState(false);
  const [visibleJefeOperario, setVisibleJefeOperario] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  const [idEvaluacion, setIdEvaluacion] = useState(null);

  const getEmpleados = async () => {
    try {
      const response = await axios.get(`${EMPLEADO_URL}`);
      console.log("Empleados crudos:", response.data);

      const empleadosOrdenados = response.data.sort((a, b) =>
        `${a.nombre} ${a.apellidos}`.localeCompare(`${b.nombre} ${b.apellidos}`)
      );

      console.log("Empleados ordenados:", empleadosOrdenados);
      setEmpleados(empleadosOrdenados);
    } catch (error) {
      console.error("Error al obtener empleados: ", error);
    }
  };

  // ✅ Crear evaluación de desempeño
  const createEvaluacion = async (data) => {
    try {
      const response = await axios.post(EVALUACION_URL, data);
      return response.data; // devuelve el ID creado, si lo necesitas
    } catch (error) {
      console.error("Error al crear evaluación:", error);
      throw error;
    }
  };

  // ✅ Crear pregunta
  const createPregunta = async (data) => {
    try {
      const response = await axios.post(PREGUNTA_URL, data);
      return response.data;
    } catch (error) {
      console.error("Error al crear pregunta:", error);
      throw error;
    }
  };

  const setNullIdEvaluacion = () => {
    setIdEvaluacion(null);
  };

  const setNewIdEvaluacion = (id) => {
    setIdEvaluacion(id);
  };

  const setGrupoPrimarioLVisible = () => {
    setVisibleGrupoPrimarioL(!visibleGrupoPrimarioL);
  };

  const setGrupoPrimarioEVisible = () => {
    setVisibleGrupoPrimarioE(!visibleGrupoPrimarioE);
  };

  const setJefeColaboradorVisible = () => {
    setVisibleJefeColaborador(!visibleJefeColaborador);
  };

  const setAutoevaluacionVisible = () => {
    setVisibleAutoevaluacion(!visibleAutoevaluacion);
  };

  const setColaboradorJefeVisible = () => {
    setVisibleColaboradorJefe(!visibleColaboradorJefe);
  };

  const setJefeOperarioVisible = () => {
    setVisibleJefeOperario(!visibleJefeOperario);
  };

  return {
    setGrupoPrimarioLVisible,
    visibleGrupoPrimarioL,
    setGrupoPrimarioEVisible,
    visibleGrupoPrimarioE,
    setJefeColaboradorVisible,
    visibleJefeColaborador,
    setAutoevaluacionVisible,
    visibleAutoevaluacion,
    setColaboradorJefeVisible,
    visibleColaboradorJefe,
    setJefeOperarioVisible,
    visibleJefeOperario,
    empleados,
    getEmpleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNullIdEvaluacion,
    setNewIdEvaluacion,
  };
};
