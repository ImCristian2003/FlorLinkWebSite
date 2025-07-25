/* eslint-disable react/prop-types */
import { useOfrecimiento } from "../../hooks/useOfrecimiento";
import { OfrecimientoContext } from "./OfrecimientoContext";

export const OfrecimientoProvider = ({ children }) => {
  const {
    dataOfrecimiento,
    getAllOfrecimiento,
    loading,
    showNoches,
    onInputSearchChange,
    onInputFincaChange,
    onInputGradoChange,
    resultsFiltered,
    resetSearch,
    setVisibleNoches,
    dataFincaDist,
    dataGradoDist,
    getDataFilters,
  } = useOfrecimiento();

  return (
    <OfrecimientoContext.Provider
      value={{
        dataOfrecimiento,
        getAllOfrecimiento,
        loading,
        showNoches,
        onInputSearchChange,
        onInputFincaChange,
        onInputGradoChange,
        resultsFiltered,
        resetSearch,
        setVisibleNoches,
        dataFincaDist,
        dataGradoDist,
        getDataFilters,
      }}
    >
      {children}
    </OfrecimientoContext.Provider>
  );
};
