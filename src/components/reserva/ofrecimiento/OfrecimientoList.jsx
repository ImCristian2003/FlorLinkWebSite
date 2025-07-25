import { useContext } from "react";
import { ToolTipReserva } from "../ToolTipReserva";
import { LuNotebookPen } from "react-icons/lu";
import { AuthContext } from "../../../auth/context/AuthContext";
import { OfrecimientoContext } from "../../../context/Ofrecimiento/OfrecimientoContext";
import { ReservaContext } from "../../../context/Reserva/ReservaContext";

export const OfrecimientoList = () => {
  const { login } = useContext(AuthContext);

  const { showNoches, setVisibleNoches, resultsFiltered } =
    useContext(OfrecimientoContext);

  const {
    setReservasVisible,
    setReservaTitle,
    reservas,
    reservaFilterByProduct,
    setInfoReserva,
  } = useContext(ReservaContext);

  return (
    <>
      <table className="table rounded-3 overflow-hidden table-hover table-ofrecimiento">
        <thead>
          <tr className="text-center">
            <th>FINCA </th>
            {/* <th>GRUPO</th> */}
            <th>NOMBRE</th>
            {/* <th>PRODUCTO</th>
                <th>COLOR</th>
                <th>VARIEDAD</th> */}
            <th>GRADO</th>
            {showNoches ? (
              <>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                {/* <th>8</th>
                    <th>9</th> */}
              </>
            ) : (
              ""
            )}
            <th>TOTAL TALLOS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {resultsFiltered.map((item, index) => (
            <tr className="text-center" key={index}>
              <td>{item.finca}</td>
              {/* <td>{item.grupo}</td> */}
              <td className="td-border-tb">{item.nombre}</td>
              {/* <td>{item.producto}</td>
                  <td>{item.color}</td>
                  <td>{item.variedad}</td> */}
              <td className="td-border-tb">{item.grado}</td>
              {showNoches ? (
                <>
                  <td
                    className={
                      item.n0 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n0}
                  </td>
                  <td
                    className={
                      item.n1 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n1}
                  </td>
                  <td
                    className={
                      item.n2 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n2}
                  </td>
                  <td
                    className={
                      item.n3 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n3}
                  </td>
                  <td
                    className={
                      item.n4 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n4}
                  </td>
                  <td
                    className={
                      item.n5 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n5}
                  </td>
                  <td
                    className={
                      item.n6 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n6}
                  </td>
                  <td
                    className={
                      item.n7 == 0 ? "bg-danger-subtle text-danger" : ""
                    }
                  >
                    {item.n7}
                  </td>
                  {/* <td
                        className={
                          item.n8 == 0 ? "bg-danger-subtle text-danger" : ""
                        }
                      >
                        {item.n8}
                      </td>
                      <td
                        className={
                          item.n9 == 0 ? "bg-danger-subtle text-danger" : ""
                        }
                      >
                        {item.n9}
                      </td> */}
                </>
              ) : (
                ""
              )}
              <td className="tdCustomice td-border-tb">
                <div className="td-info">
                  <button
                    className="btnAction btn-total-tallos"
                    disabled={item.total_tallos == 0}
                    onClick={() => setVisibleNoches()}
                  >
                    {item.total_tallos}
                  </button>
                  {reservaFilterByProduct(reservas, item).length > 0 && (
                    <div className="info-tooltip">
                      <ToolTipReserva
                        finca={item.finca}
                        nombre={item.nombre}
                        grado={item.grado}
                      />
                    </div>
                  )}
                </div>
              </td>
              <td className="tdCustomice">
                <button
                  className="btnAction"
                  onClick={() => {
                    setReservasVisible();
                    setReservaTitle("Ofrecimiento");
                    setInfoReserva({
                      finca: item.finca,
                      nombre: item.nombre,
                      grado: item.grado,
                      vendedora: login.user?.username,
                      estado_reserva: "Pendiente",
                      total_tallos_ofre: item.total_tallos,
                    });
                    //console.log(infoOfrecimiento);
                  }}
                >
                  <LuNotebookPen size={30} color="#616068" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
