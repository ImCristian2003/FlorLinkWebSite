/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ReservaContext } from "../../context/Reserva/ReservaContext";
import Swal from "sweetalert2";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const ReservaModal = ({ title, infoReserva }) => {
  const {
    initialReservaForm,
    handlerAddReserva,
    setReservasVisible,
    totalTallos,
    onInputChangeT,
    resetTotalTallos,
    handlerAllReservas,
    reservaFilterByProduct,
    reservas,
  } = useContext(ReservaContext);

  const {
    semana = "und",
    dia_semana = "und",
    finca,
    nombre,
    grado = "und",
    vendedora,
    estado_reserva,
    total_tallos_ofre,
  } = infoReserva;

  const [reservaForm, setReservaForm] = useState(initialReservaForm);

  const total_tallos =
    totalTallos.tallos * totalTallos.ramos * totalTallos.cajas;
  let tallos_reales = 0;

  const validateObjExist = (reservas, infoReserva) => {
    if (reservaFilterByProduct(reservas, infoReserva).length >= 1) {
      return reservaFilterByProduct(reservas, infoReserva).reduce(
        (sum, reserva) => sum + reserva.total_tallos,
        0
      );
    } else {
      return false;
    }
  };

  const total_tallos_temp = validateObjExist(reservas, infoReserva);

  const onInputChangeForm = ({ target }) => {
    const { name, value } = target;
    setReservaForm({
      ...reservaForm,
      [name]: value,
    });
  };

  const onSubmitReserva = (event) => {
    event.preventDefault();

    if (total_tallos_temp) {
      tallos_reales = total_tallos_ofre - total_tallos_temp;
    } else {
      tallos_reales = total_tallos_ofre;
    }

    if (total_tallos > tallos_reales || total_tallos == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer:
          "Debes reservar una cantidad de tallos igual o menor a " +
          tallos_reales,
      });
    } else {
      if (
        reservaForm.cliente.length == 0 ||
        reservaForm.total_tallos.length == 0 ||
        reservaForm.tipo_caja.length == 0
      ) {
        Swal.fire("Todos los campos deben tener información!");
        return;
      }

      if (!reservaForm.observacion) {
        reservaForm.observacion = "Sin observaciones";
      }

      const newReservaForm = {
        ...reservaForm,
        semana, //
        dia_semana, //
        finca,
        nombre,
        grado, //
        vendedora,
        estado_reserva,
        total_tallos,
      };

      setReservaForm(newReservaForm);
      handlerAddReserva(newReservaForm);
      setTimeout(() => {
        handlerAllReservas();
      }, 500);
      setReservaForm(initialReservaForm);
      resetTotalTallos();
      setReservasVisible();
    }
  };

  return (
    <>
      <div
        className="modal fade show d-block fadeIn animacion abrir-modal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reserva de {title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setReservasVisible();
                  resetTotalTallos();
                }}
              ></button>
            </div>
            <div className="modal-body">
              {total_tallos_temp && (
                <div className="alert alert-info text-center">
                  <IoIosInformationCircleOutline size={25} /> Puedes reservar
                  hasta {total_tallos_ofre - total_tallos_temp} tallos
                </div>
              )}
              <div className="modal-body-details">
                <form onSubmit={onSubmitReserva} className="form-reservas">
                  <select
                    className="form-select my-3 w-90 mx-auto"
                    aria-label="select"
                    name="cliente"
                    onChange={onInputChangeForm}
                  >
                    <option value="">Selecciona el cliente</option>
                    <option value="Tradewinds">Tradewinds</option>
                    <option value="Jolo Flowers">Jolo Flowers</option>
                    <option value="Silchile">Silchile</option>
                  </select>
                  <div className="cont-total-tallos w-90 mx-auto">
                    <input
                      type="number"
                      className="form-control input-tallos"
                      placeholder="tallos"
                      name="tallos"
                      onChange={(e) => {
                        onInputChangeT(e);
                      }}
                    />
                    <input
                      type="number"
                      className="form-control input-ramos"
                      placeholder="ramos"
                      name="ramos"
                      onChange={(e) => {
                        onInputChangeT(e);
                      }}
                    />
                    <input
                      type="number"
                      className="form-control input-cajas"
                      placeholder="cajas"
                      name="cajas"
                      onChange={(e) => {
                        onInputChangeT(e);
                      }}
                    />
                    <label
                      id="total_tallos"
                      className="form-control label-total"
                    >
                      {totalTallos.tallos *
                        totalTallos.ramos *
                        totalTallos.cajas}
                    </label>
                  </div>
                  <select
                    className="form-select my-3 w-90 mx-auto"
                    aria-label="select"
                    name="tipo_caja"
                    onChange={onInputChangeForm}
                  >
                    <option value="">Selecciona el tipo de caja</option>
                    <option value="Cuarto">Cuarto</option>
                    <option value="Hamper">Hamper</option>
                    <option value="Tabaco">Tabaco</option>
                  </select>
                  <textarea
                    className="form-control my-3 w-90 mx-auto textarea-pers"
                    name="observacion"
                    id=""
                    placeholder="Observaciones"
                    onChange={onInputChangeForm}
                  ></textarea>
                  <hr />
                  <button
                    type="submit"
                    className="btn d-block ms-auto"
                    // onClick={() => {
                    //   resetTotalTallos();
                    //   setReservasVisible();
                    // }}
                  >
                    Reservar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
