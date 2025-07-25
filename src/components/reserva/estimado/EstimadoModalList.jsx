import { useContext } from "react";
import { EstimadoContext } from "../../../context/Estimado/EstimadoContext";
import { getISOWeek } from "date-fns";
import { ReservaContext } from "../../../context/Reserva/ReservaContext";
import { AuthContext } from "../../../auth/context/AuthContext";

export const EstimadoModalList = () => {
  const { login } = useContext(AuthContext);

  const { dataEstimado, setEstimadosVisible } = useContext(EstimadoContext);

  const { setReservasVisible, setReservaTitle, setInfoReserva } =
    useContext(ReservaContext);

  const semanaActual = getISOWeek(new Date());

  const dataSemanaActual = `sm${semanaActual}`;
  const dataSemanaProxima = `sm${semanaActual + 1}`;

  return (
    <>
      <div
        className="modal fade show d-block fadeIn animacion abrir-modal"
        tabIndex="-1"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          style={{ width: "90vw", height: "90vh", maxWidth: "none" }}
        >
          <div className="modal-content" style={{ height: "100%" }}>
            <div className="modal-header">
              <h5 className="modal-title">Estimados</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setEstimadosVisible();
                }}
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <table className="table rounded-3 overflow-hidden table-hover table-estimados">
                <thead>
                  <tr className="text-center">
                    <th>FINCA</th>
                    <th>DÍA</th>
                    <th>PRODUCTO</th>
                    <th>COLOR</th>
                    <th>VARIEDAD</th>
                    <th>SEMANA {semanaActual}</th>
                    <th>SEMANA {semanaActual + 1}</th>
                  </tr>
                </thead>
                <tbody>
                  {dataEstimado.map((item, index) => (
                    <tr className="text-center" key={index}>
                      <td>{item.FINCA}</td>
                      <td className="td-border-tb">{item.DIA_SEMANA}</td>
                      <td className="td-border-tb">{item.PRODUCTO}</td>
                      <td className="td-border-tb">{item.COLOR}</td>
                      <td className="td-border-tb">{item.VARIEDAD}</td>
                      <td className="td-border-tb">
                        <button
                          className="btn-estimados-semana"
                          onClick={() => {
                            setReservasVisible();
                            setReservaTitle("Estimados");
                            setInfoReserva({
                              semana: dataSemanaActual,
                              dia_semana: item.DIA_SEMANA,
                              finca: item.FINCA,
                              nombre:
                                item.PRODUCTO +
                                " " +
                                item.VARIEDAD +
                                " " +
                                item.COLOR,
                              grado: "",
                              vendedora: login.user?.username,
                              estado_reserva: "Pendiente",
                              total_tallos_ofre: item.total_tallos,
                            });
                          }}
                        >
                          {item[dataSemanaActual]}
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-estimados-semana"
                          onClick={() => {
                            setReservasVisible();
                            setReservaTitle("Estimados");
                            setInfoReserva({
                              semana: dataSemanaActual + 1,
                              dia_semana: item.DIA_SEMANA,
                              finca: item.FINCA,
                              nombre:
                                item.PRODUCTO +
                                " " +
                                item.VARIEDAD +
                                " " +
                                item.COLOR,
                              grado: "",
                              vendedora: login.user?.username,
                              estado_reserva: "Pendiente",
                              total_tallos_ofre: item.total_tallos,
                            });
                          }}
                        >
                          {item[dataSemanaProxima]}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
