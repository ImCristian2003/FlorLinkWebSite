/* eslint-disable react/prop-types */
import { useReserva } from "../../hooks/useReserva";
import { ReservaContext } from "./ReservaContext";

export const ReservaProvider = ({ children }) => {
  const {
    initialTotal,
    initialReservaForm,
    visibleReservas,
    setReservasVisible,
    totalTallos,
    handlerAddReserva,
    onInputChangeT,
    resetTotalTallos,
    titleReserva,
    setReservaTitle,
    reservas,
    handlerAllReservas,
    reservaFilterByProduct,
    initialReserva,
    infoReserva,
    setInfoReserva,
    rejectReserva,
    confirmReserva,
  } = useReserva();

  return (
    <ReservaContext.Provider
      value={{
        initialTotal,
        initialReservaForm,
        visibleReservas,
        setReservasVisible,
        totalTallos,
        handlerAddReserva,
        onInputChangeT,
        resetTotalTallos,
        titleReserva,
        setReservaTitle,
        reservas,
        handlerAllReservas,
        reservaFilterByProduct,
        initialReserva,
        infoReserva,
        setInfoReserva,
        rejectReserva,
        confirmReserva,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};
