/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { PerformanceEvaluation } from "../../../context/PerformanceEvaluation/PerformanceEvaluationContext";

export const ColaboradorJefeModal = () => {
  const {
    setGrupoPrimarioVisible,
    empleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNewIdEvaluacion,
    setColaboradorJefeVisible,
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
        id_grupo_evaluacion: 4,
        id_evaluador: parseInt(evaluador),
        id_evaluado: parseInt(evaluado),
        id_enfoque_evaluacion: 3,
        observaciones,
      });

      const idEvaluacionI = evaluacion.id_evaluacion_desempenio;
      setNewIdEvaluacion(evaluacion.id_evaluacion_desempenio);

      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1:
          "Promueve relaciones de confianza con los miembros de su equipo",
        pregunta2: "Es cercano y accesible para resolver inquietudes",
        pregunta3:
          "Es coherente entre lo que dice y hace, generando credibilidad",
        pregunta4: "Fomenta un trato respetuoso y cordial en el equipo",
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
        pregunta1:
          "Domina y actualiza los conocimientos necesarios para liderar su equipo",
        pregunta2:
          "Comparte conocimiento y guía al equipo para resolver dudas o problemas",
        pregunta3:
          "Impulsa la mejora continua y la búsqueda de soluciones innovadoras",
        pregunta4: "Toma decisiones con oportunidad, agilidad y criterio",
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
          "Escucha activamente y con respeto las ideas y necesidades del equipo",
        pregunta2:
          "Comunica con claridad, transparencia y frecuencia las metas y expectativas",
        pregunta3: "Maneja los conflictos de forma justa y constructiva",
        pregunta4:
          "Fomenta la colaboración y la cohesión dentro del equipo y con otras áreas",
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
        pregunta1: "Define metas claras y retadoras para el equipo",
        pregunta2: "Hace seguimiento y acompaña para lograr los resultados",
        pregunta3: "Administra de forma responsable los recursos del equipo",
        pregunta4:
          "Promueve la disciplina, la calidad y la autogestión en el equipo",
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
      setColaboradorJefeVisible(); // Cerrar modal
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
              <h5 className="modal-title">Evaluación Colaborador a Jefe</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setColaboradorJefeVisible();
                }}
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <h2>Bienvenido a la evaluación de liderazgo de tu jefe.</h2>
              <p>
                Este espacio no es solo para calificar, sino para construir
                juntos un mejor ambiente de trabajo y fortalecer el liderazgo en
                Deliflor. Reflexiona con sinceridad y respeto sobre cómo tu jefe
                acompaña al equipo, comunica, promueve la confianza y facilita
                el logro de objetivos. Tus respuestas son valiosas para ayudar a
                tu líder a crecer y mejorar, y para consolidar un estilo de
                liderazgo alineado con nuestro ADN. Gracias por participar con
                compromiso en este ejercicio de mejora compartida.
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

              <h3>ENFOQUE EN LIDERAZGO</h3>
              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN1}>
                  <h4>SOMOS PARA NUESTROS CLIENTES</h4>
                  <p>
                    Enfocado en cercanía, autenticidad, confianza, humildad,
                    aprendizaje.
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Promueve relaciones de confianza con los miembros de su
                      equipo
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
                      2. Es cercano y accesible para resolver inquietudes
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
                      3. Es coherente entre lo que dice y hace, generando
                      credibilidad
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

                  {/* Pregunta 4 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      4. Fomenta un trato respetuoso y cordial en el equipo
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
                            setRespuestasE1ADN1({
                              ...respuestasE1ADN1,
                              pregunta4: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  <button type="submit" disabled={observaciones ? false : true}>
                    Enviar
                  </button>
                </form>
              </div>

              {/*********************** ADN 2 ***********************/}

              <div className="adn-2">
                <form onSubmit={onSubmitE1ADN2}>
                  <h4>EL QUE SABE, SABE</h4>
                  <p>
                    Orientado al conocimiento, iniciativa, agilidad, superación
                    de expectativas.
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Domina y actualiza los conocimientos necesarios para
                      liderar su equipo
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
                      2. Comparte conocimiento y guía al equipo para resolver
                      dudas o problemas
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
                      3. Impulsa la mejora continua y la búsqueda de soluciones
                      innovadoras
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

                  {/* Pregunta 4 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      4. Toma decisiones con oportunidad, agilidad y criterio
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
                            setRespuestasE1ADN2({
                              ...respuestasE1ADN2,
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
              </div>

              {/************************* ADN 3 **************************/}

              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN3}>
                  <h4>UNIDOS SOMOS MÁS PODEROSOS</h4>
                  <p>
                    Trabajo en equipo, comunicación, cuidado mutuo, resolución
                    de conflictos.
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Escucha activamente y con respeto las ideas y
                      necesidades del equipo
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
                      2. Comunica con claridad, transparencia y frecuencia las
                      metas y expectativas
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
                      3. Maneja los conflictos de forma justa y constructiva
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

                  {/* Pregunta 4 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      4. Fomenta la colaboración y la cohesión dentro del equipo
                      y con otras áreas
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
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
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
              </div>

              {/************************* ADN 4 **************************/}

              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN4}>
                  <h4>TODO Y MÁS POR LOS CRISANTEMOS</h4>
                  <p>
                    Compromiso con metas, autogestión, disciplina, eficiencia.
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Define metas claras y retadoras para el equipo
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
                      2. Hace seguimiento y acompaña para lograr los resultados
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
                      3. Administra de forma responsable los recursos del equipo
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
                      4. Promueve la disciplina, la calidad y la autogestión en
                      el equipo
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
                  <label htmlFor="observaciones">
                    <b style={{ color: "red" }}>*</b> Observaciones:
                  </label>
                  <p>Ten en cuenta las siguientes preguntas abiertas:</p>
                  <p>¿Qué cualidades destacas de tu jefe como líder?</p>
                  <p>
                    ¿Qué sugerencias tienes para que tu jefe mejore su
                    liderazgo?
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
