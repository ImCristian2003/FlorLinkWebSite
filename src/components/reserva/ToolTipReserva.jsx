/* eslint-disable react/prop-types */
import { useContext } from "react";
//import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ReservaContext } from "../../context/Reserva/ReservaContext";
import { FaInfoCircle } from "react-icons/fa";

export const ToolTipReserva = ({ finca, nombre, grado }) => {
  const { reservas, reservaFilterByProduct } = useContext(ReservaContext);

  const item = { finca, nombre, grado };

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip id={"tooltip-top"}>
          <div className="">
            <ul>
              {reservaFilterByProduct(reservas, item).map((reserva, index) => (
                <li key={index}>
                  {reserva.total_tallos} tallos reservados para{" "}
                  {reserva.cliente} en espera de confirmación.
                </li>
              ))}
            </ul>
          </div>
        </Tooltip>
      }
    >
      <span className="tooltip-trigger-info">
        <FaInfoCircle size={20} color="#616068" />
      </span>
    </OverlayTrigger>
  );
};
