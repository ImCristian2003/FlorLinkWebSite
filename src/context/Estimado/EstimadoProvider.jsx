/* eslint-disable react/prop-types */
import { useEstimado } from "../../hooks/useEstimado";
import { EstimadoContext } from "./EstimadoContext";

export const EstimadoProvider = ({ children }) => {
  const {
    dataEstimado,
    getAllEstimados,
    visibleEstimados,
    setEstimadosVisible,
  } = useEstimado();

  return (
    <EstimadoContext.Provider
      value={{
        dataEstimado,
        getAllEstimados,
        visibleEstimados,
        setEstimadosVisible,
      }}
    >
      {children}
    </EstimadoContext.Provider>
  );
};
