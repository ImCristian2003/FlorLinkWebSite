/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { PerformanceEvaluation } from "../../../context/PerformanceEvaluation/PerformanceEvaluationContext";

export const GrupoPrimarioEstrategiaModal = () => {
  const {
    empleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNewIdEvaluacion,
    setGrupoPrimarioEVisible,
  } = useContext(PerformanceEvaluation);

  // Manejo del evaluador y evaluado selecionado juntos a las respuestas
  const [evaluador, setEvaluador] = useState("");
  const [evaluado, setEvaluado] = useState("");
  const [respuestasE1ADN1, setRespuestasE1ADN1] = useState({});
  const [respuestasE1ADN2, setRespuestasE1ADN2] = useState({});
  const [respuestasE1ADN3, setRespuestasE1ADN3] = useState({});
  const [respuestasE1ADN4, setRespuestasE1ADN4] = useState({});
  const [observaciones, setObservaciones] = useState("");

  const opciones = ["Nunca", "A veces", "Frecuentemente", "Siempre"];

  const onSubmitE1ADN1 = async (e) => {
    e.preventDefault();

    try {
      // 1. Crear evaluación
      const evaluacion = await createEvaluacion({
        id_grupo_evaluacion: 1,
        id_evaluador: parseInt(evaluador),
        id_evaluado: parseInt(evaluado),
        id_enfoque_evaluacion: 2,
        observaciones,
      });

      const idEvaluacionI = evaluacion.id_evaluacion_desempenio;
      setNewIdEvaluacion(evaluacion.id_evaluacion_desempenio);

      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1:
          "Define e impulsa lineamientos que promuevan relaciones de confianza con clientes clave",
        pregunta2:
          "Representa a Deliflor con autenticidad y compromiso frente a socios estratégicos",
        pregunta3:
          "Fomenta la cercanía y la transparencia en la relación con grandes clientes o aliados",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN1)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacionI,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 1,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      // setGrupoPrimarioVisible(); // Cerrar modal
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar la evaluación");
    }
  };

  const onSubmitE1ADN2 = async (e) => {
    e.preventDefault();

    try {
      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1: "Procura el desarrollo de capacidades estratégicas",
        pregunta2:
          "Lidera iniciativas para mejorar procesos o resultados estratégicos",
        pregunta3:
          "Toma decisiones ágiles y fundamentadas con visión de negocio",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN2)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacion,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 2,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      // setGrupoPrimarioVisible(); // Cerrar modal
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar la evaluación");
    }
  };

  const onSubmitE1ADN3 = async (e) => {
    e.preventDefault();

    try {
      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1:
          "Fomenta la colaboración entre áreas y equipos para lograr objetivos comunes",
        pregunta2:
          "Maneja conflictos entre diferentes áreas o procesos con equidad y visión global",
        pregunta3:
          "Inspira cohesión y sentido de pertenencia en toda la organización",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN3)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacion,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 3,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      // setGrupoPrimarioVisible(); // Cerrar modal
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar la evaluación");
    }
  };

  const onSubmitE1ADN4 = async (e) => {
    e.preventDefault();

    try {
      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1:
          "Hace seguimiento a sus indicadores clave para garantizar resultados",
        pregunta2:
          "Administra recursos estratégicos de manera responsable y sostenible",
        pregunta3:
          "Impulsa la disciplina, la calidad y la mejora continua en la organización",
        pregunta4: "Vela por el cumplimiento del presupuesto de su proceso",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN4)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacion,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 4,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      setGrupoPrimarioEVisible(); // Cerrar modal
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar la evaluación");
    }
  };

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
              <h5 className="modal-title">
                Evaluación Grupo Primario - Estrategia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setGrupoPrimarioEVisible();
                }}
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <h2>Bienvenido al proceso de evaluación de tu equipo</h2>
              <p>
                Esta evaluación es una herramienta estratégica para reflexionar
                de manera estructurada y objetiva sobre el desempeño de cada
                miembro del equipo directivo de Deliflor. Más que calificar con
                un número, se trata de analizar con claridad y visión de negocio
                cómo cada director contribuye a consolidar el ADN Deliflor,
                liderar su equipo y alinear las acciones de su área con la
                estrategia de la empresa. Te invitamos a tomarte este espacio
                como una oportunidad valiosa para:{" "}
                <b>
                  Reconocer las fortalezas y aportes estratégicos de cada
                  director Identificar oportunidades de desarrollo que
                  fortalezcan su liderazgo y la colaboración entre áreas Alinear
                  expectativas y prioridades para construir juntos el futuro de
                  Deliflor
                </b>
              </p>

              <select
                id="evaluador-select"
                value={evaluador}
                onChange={(e) => setEvaluador(e.target.value)}
              >
                <option value="">Seleccionar Evaluador</option>
                {empleados.map((empleado) => (
                  <option
                    key={empleado.id_empleado}
                    value={empleado.id_empleado}
                  >
                    {empleado.nombre} {empleado.apellidos}
                  </option>
                ))}
              </select>

              <select
                id="evaluado-select"
                value={evaluado}
                onChange={(e) => setEvaluado(e.target.value)}
              >
                <option value="">Seleccionar Evaluado</option>
                {empleados.map((empleado) => (
                  <option
                    key={empleado.id_empleado}
                    value={empleado.id_empleado}
                  >
                    {empleado.nombre} {empleado.apellidos}
                  </option>
                ))}
              </select>

              <h3>ENFOQUE ESTRATÉGICO</h3>
              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN1}>
                  <h4>SOMOS PARA NUESTROS CLIENTES</h4>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Define e impulsa lineamientos que promuevan relaciones
                      de confianza con clientes clave
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta1"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN1({
                              ...respuestasE1ADN1,
                              pregunta1: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 2 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      2. Representa a Deliflor con autenticidad y compromiso
                      frente a socios estratégicos
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta2"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN1({
                              ...respuestasE1ADN1,
                              pregunta2: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 3 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      3. Fomenta la cercanía y la transparencia en la relación
                      con grandes clientes o aliados
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta3"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN1({
                              ...respuestasE1ADN1,
                              pregunta3: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  <button type="submit">Enviar</button>
                </form>
              </div>

              {/*********************** ADN 2 ***********************/}

              <div className="adn-2">
                <form onSubmit={onSubmitE1ADN2}>
                  <h4>EL QUE SABE, SABE</h4>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Procura el desarrollo de capacidades estratégicas
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta1"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN2({
                              ...respuestasE1ADN2,
                              pregunta1: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 2 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      2. Lidera iniciativas para mejorar procesos o resultados
                      estratégicos
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta2"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN2({
                              ...respuestasE1ADN2,
                              pregunta2: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 3 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      3. Toma decisiones ágiles y fundamentadas con visión de
                      negocio
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta3"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN2({
                              ...respuestasE1ADN2,
                              pregunta3: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  <button type="submit" disabled={idEvaluacion ? false : true}>
                    Enviar
                  </button>
                </form>
              </div>

              {/************************* ADN 3 **************************/}

              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN3}>
                  <h4>UNIDOS SOMOS MÁS PODEROSOS</h4>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Fomenta la colaboración entre áreas y equipos para
                      lograr objetivos comunes
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta1"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
                              pregunta1: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 2 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      2. Maneja conflictos entre diferentes áreas o procesos con
                      equidad y visión global
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta2"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
                              pregunta2: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 3 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      3. Inspira cohesión y sentido de pertenencia en toda la
                      organización
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta3"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
                              pregunta3: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  <button type="submit" disabled={idEvaluacion ? false : true}>
                    Enviar
                  </button>
                </form>
              </div>

              {/************************* ADN 4 **************************/}

              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN4}>
                  <h4>TODO Y MÁS POR LOS CRISANTEMOS</h4>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Hace seguimiento a sus indicadores clave para
                      garantizar resultados
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta1"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta1: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 2 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      2. Administra recursos estratégicos de manera responsable
                      y sostenible
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta2"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta2: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 3 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      3. Impulsa la disciplina, la calidad y la mejora continua
                      en la organización
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta3"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta3: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 4 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      4. Vela por el cumplimiento del presupuesto de su proceso
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta4"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta4: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  <button type="submit" disabled={idEvaluacion ? false : true}>
                    Enviar
                  </button>
                </form>
                <br />
                <div>
                  <label htmlFor="observaciones">Observaciones:</label>
                  <p>Ten en cuenta las siguientes preguntas abiertas:</p>
                  <p>
                    ¿Qué observaciones podrías hacerle a tu colaborador para
                    mejorar en su trabajo?
                  </p>
                  <p>
                    ¿Qué fortalezas estratégicas destacas en el liderazgo de
                    este colaborador?
                  </p>
                  <p>
                    ¿Qué sugerencias tienes para que fortalezca su rol
                    estratégico?
                  </p>
                  <br />
                  <textarea
                    id="observaciones"
                    name="observaciones"
                    value={observaciones}
                    onChange={(e) => setObservaciones(e.target.value)}
                    rows={4}
                    cols={50}
                    placeholder="Escribe aquí tus observaciones..."
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
