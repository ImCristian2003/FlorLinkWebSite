/* eslint-disable react/prop-types */
import { usePerformanceEvaluation } from "../../hooks/usePerformanceEvaluation";
import { PerformanceEvaluation } from "./PerformanceEvaluationContext";

export const PerformanceEvaluationProvider = ({ children }) => {
  const {
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
  } = usePerformanceEvaluation();

  return (
    <PerformanceEvaluation.Provider
      value={{
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
      }}
    >
      {children}
    </PerformanceEvaluation.Provider>
  );
};
