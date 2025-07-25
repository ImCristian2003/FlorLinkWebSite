import { useContext, useEffect } from "react";
import { ReservaContext } from "../context/Reserva/ReservaContext";
import { ReservaRow } from "../components/reserva/ReservaRow";

export const ReservasOfrecimPage = () => {
  const { reservas, handlerAllReservas } = useContext(ReservaContext);

  useEffect(() => {
    handlerAllReservas();
  }, []);

  return (
    <>
      <div className="container-fluid container-reservas">
        <h1>Reservas Ofrecimiento</h1>
        <table className="table rounded-3 overflow-hidden table-hover table-reservas">
          <thead>
            <tr className="text-center">
              <th>FINCA</th>
              <th>NOMBRE</th>
              <th>GRADO</th>
              <th>CLIENTE</th>
              <th>TALLOS TOTALES</th>
              <th>TIPO DE CAJA</th>
              <th>OBSERVACIÓN</th>
              <th>VENDEDORA</th>
              <th>FECHA/HORA RESERVA</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((item, index) => (
              <ReservaRow
                key={index}
                id={item.id}
                finca={item.finca}
                nombre={item.nombre}
                grado={item.grado}
                cliente={item.cliente}
                total_tallos={item.total_tallos}
                tipo_caja={item.tipo_caja}
                observacion={item.observacion}
                vendedora={item.vendedora}
                estado_reserva={item.estado_reserva}
                fecha_hora_reserva={item.fecha_hora_reserva}
                emailUser="auxdesarrollo@silvestres.com"
              ></ReservaRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
