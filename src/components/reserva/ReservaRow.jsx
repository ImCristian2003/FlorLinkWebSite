/* eslint-disable react/prop-types */
import { GiConfirmed } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useContext } from "react";
import { ReservaContext } from "../../context/Reserva/ReservaContext";

export const ReservaRow = ({
  id,
  finca,
  nombre,
  grado,
  cliente,
  total_tallos,
  tipo_caja,
  observacion,
  vendedora,
  fecha_hora_reserva,
  emailUser,
}) => {
  const { rejectReserva, confirmReserva } = useContext(ReservaContext);

  const message = `
    Reserva confirmada para ${cliente}
    ${nombre} ${grado} - ${total_tallos} tallos
    Caja: ${tipo_caja}
    Observaciones: ${observacion}
  `;

  return (
    <>
      <tr className="text-center">
        <td>{finca}</td>
        <td className="td-border-tb">{nombre}</td>
        <td className="td-border-tb">{grado}</td>
        <td className="td-border-tb">{cliente}</td>
        <td className="td-border-tb">{total_tallos}</td>
        <td className="td-border-tb">{tipo_caja}</td>
        <td className="td-border-tb">{observacion}</td>
        <td className="td-border-tb">{vendedora}</td>
        <td className="td-border-tb">
          {format(fecha_hora_reserva, "EEEE, dd 'de' MMMM hh:mm a", {
            locale: es,
          })}
        </td>
        <td className="td-border-tb">
          <button className="btnAction" onClick={() => rejectReserva({ id })}>
            <MdDeleteOutline size={27} color="#8B0000" />
          </button>
        </td>
        <td>
          <button
            className="btnAction"
            onClick={() => confirmReserva(id, emailUser, message)}
          >
            <GiConfirmed size={25} color="#1E5631" />
          </button>
        </td>
      </tr>
    </>
  );
};
