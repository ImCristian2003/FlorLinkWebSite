import { useState } from "react";
import {
  deleteReserva,
  getAllReservas,
  saveReserva,
  sendEmailReserva,
} from "../services/reservaService";
import Swal from "sweetalert2";

const initialTotal = {
  tallos: 0,
  ramos: 0,
  cajas: 0,
};

const initialReservaForm = {
  finca: "",
  nombre: "",
  grado: "",
  cliente: "",
  total_tallos: 0,
  tipo_caja: "",
  observacion: "",
  vendedora: "",
  estado_reserva: "",
};

const initialReserva = {
  semana: "",
  dia_semana: "",
  finca: "",
  nombre: "",
  grado: "",
  vendedora: "",
  estado_reserva: "",
};

export const useReserva = () => {
  const [visibleReservas, setVisibleReservas] = useState(false);
  const [totalTallos, setTotalTallos] = useState(initialTotal);
  const [titleReserva, setTitleReserva] = useState("");
  const [reservas, setReservas] = useState([]);

  const [infoReserva, setInfoReserva] = useState(initialReserva);

  const handlerAllReservas = async () => {
    const response = await getAllReservas();
    setReservas(response.data);
  };

  const handlerAddReserva = async (reserva) => {
    let response = {};

    try {
      response = await saveReserva(reserva);
      console.log("Reserva guardada:", response?.data);
    } catch (error) {
      console.error("Error al guardar la reserva:", error);
    }
  };

  const reservaFilterByProduct = (objeto, item) => {
    const { nombre, finca, grado } = item;

    const datosReservaFilt = objeto.filter(
      (obj) =>
        obj.nombre === nombre && obj.finca === finca && obj.grado === grado
    );
    return datosReservaFilt;
  };

  const rejectReserva = (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres borrar este registro?",
      text: "¡Esta acción no se podrá revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#456587",
      cancelButtonColor: "#8B0000",
      confirmButtonText: "Sí, borrar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReserva(id);
        setTimeout(() => {
          handlerAllReservas();
        }, 500);
        Swal.fire({
          title: "¡Registro borrado!",
          text: "El registro ha sido borrado con éxito",
          icon: "success",
          confirmButtonColor: "#456587",
        });
      }
    });
  };

  const confirmReserva = (id, emailUser, message) => {
    Swal.fire({
      title: "¿Quieres confirmar esta reserva?",
      text: "¡Esta acción no se podrá revertir!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#456587",
      cancelButtonColor: "#8B0000",
      confirmButtonText: "Sí, confirmar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sendEmailReserva({ emailUser, message });
        deleteReserva({ id });
        setTimeout(() => {
          handlerAllReservas();
        }, 500);
        Swal.fire({
          title: "Reserva confirmada!",
          text: "La reserva ha sido confirmada y enviada con éxito",
          icon: "success",
          confirmButtonColor: "#456587",
        });
      }
    });
  };

  const onInputChangeT = ({ target }) => {
    const { name, value } = target;

    setTotalTallos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setReservasVisible = () => {
    setVisibleReservas(!visibleReservas);
  };

  const resetTotalTallos = () => {
    setTotalTallos(initialTotal);
  };

  const setReservaTitle = (title) => {
    setTitleReserva(title);
  };

  return {
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
  };
};
