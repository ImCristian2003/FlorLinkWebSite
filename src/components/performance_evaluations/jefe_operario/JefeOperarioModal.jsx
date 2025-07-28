/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { PerformanceEvaluation } from "../../../context/PerformanceEvaluation/PerformanceEvaluationContext";
import { useEffect } from "react";

export const JefeOperarioModal = () => {
  const {
    empleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNewIdEvaluacion,
    setJefeOperarioVisible,
  } = useContext(PerformanceEvaluation);

  // Manejo del evaluador y evaluado selecionado juntos a las respuestas
  const [evaluador, setEvaluador] = useState("");
  const [evaluado, setEvaluado] = useState("");
  const [respuestasE1ADN1, setRespuestasE1ADN1] = useState({});
  const [respuestasE1ADN2, setRespuestasE1ADN2] = useState({});
  const [respuestasE1ADN3, setRespuestasE1ADN3] = useState({});
  const [respuestasE1ADN4, setRespuestasE1ADN4] = useState({});
  const [respuestasE1ADN5, setRespuestasE1ADN5] = useState({});
  const [observaciones, setObservaciones] = useState("");

  const opciones = ["Nunca", "A veces", "Frecuentemente", "Siempre"];

  const onSubmitE1ADN1 = async (e) => {
    e.preventDefault();

    try {
      // 1. Crear evaluación
      const evaluacion = await createEvaluacion({
        id_grupo_evaluacion: 5,
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
          "Trata con respeto y amabilidad a sus compañeros y supervisores",
        pregunta2: "Cumple con los compromisos y tareas para generar confianza",
        pregunta3: "Está dispuesto a aprender de otros y enseñar lo que sabe",
        pregunta4: "Ayuda a que haya buen ambiente de trabajo",
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
        pregunta1: "Sabe hacer bien su trabajo",
        pregunta2:
          "Tiene ganas de aprender cosas nuevas para hacer su trabajo cada vez mejor",
        pregunta3: "Propone ideas para trabajar mejor o más rápido",
        pregunta4: "Entrega su trabajo con buena calidad",
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
        pregunta1: "Ayuda a sus compañeros cuando lo necesitan",
        pregunta2:
          "Se comunica claramente con sus compañeros de trabajo y con su Supervisor y/o jefes",
        pregunta3: "Resuelve problemas de forma tranquila y respetuosa",
        pregunta4: "Trabaja bien con el equipo para cumplir las metas",
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
        pregunta1: "Se esfuerza por cumplir las metas y tareas asignadas",
        pregunta2: "Cuida las herramientas y materiales de la empresa",
        pregunta3: "Es puntual, ordenado y disciplinado en su trabajo",
        pregunta4: "Mantiene un ritmo de trabajo eficiente y con calidad",
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
      // setGrupoPrimarioVisible(); // Cerrar modal
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar la evaluación");
    }
  };

  const onSubmitE1ADN5 = async (e) => {
    e.preventDefault();

    try {
      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1:
          "Usa correctamente los elementos de protección personal (EPP)",
        pregunta2:
          "Cumple los procedimientos de seguridad en su puesto de trabajo",
        pregunta3: "Reporta condiciones o actos inseguros",
        pregunta4: "Mantiene el orden y la limpieza en su área de trabajo",
        pregunta5: "Colabora en la identificación y prevención de riesgos",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN5)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacion,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 6,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      setJefeOperarioVisible(); // Cerrar modal
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
              <h5 className="modal-title">Evaluación Jefe a Operario</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setJefeOperarioVisible();
                }}
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <h2>Bienvenido al proceso de evaluación de tu equipo</h2>
              <p>
                Más que calificar con un número, esta evaluación es una
                invitación a reflexionar sobre el desarrollo de tu equipo,
                reconocer fortalezas y detectar oportunidades de mejora. Tómate
                el tiempo de pensar en comportamientos concretos y ejemplos
                reales. Tu retroalimentación es clave para motivar, orientar y
                apoyar a tu colaborador. Responde con objetividad y compromiso.
                Hagamos de esta evaluación una herramienta real de desarrollo y
                alineación con nuestro ADN Deliflor.
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
                      1. Trata con respeto y amabilidad a sus compañeros y
                      supervisores
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
                      2. Cumple con los compromisos y tareas para generar
                      confianza
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
                      3. Está dispuesto a aprender de otros y enseñar lo que
                      sabe
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
                    <label>4. Ayuda a que haya buen ambiente de trabajo</label>
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
                    Enfocado en saber hacer bien el trabajo, aprender, proponer
                    mejoras
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>1. Sabe hacer bien su trabajo</label>
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
                      2. Tiene ganas de aprender cosas nuevas para hacer su
                      trabajo cada vez mejor
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
                      3. Propone ideas para trabajar mejor o más rapido
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
                    <label>4. Entrega su trabajo con buena calidad</label>
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
                    Trabajo en equipo, comunicación, resolver problemas juntos
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>1. Ayuda a sus compañeros cuando lo necesitan</label>
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
                      2. Se comunica claramente con sus compañeros de trabajo y
                      con su Supervisor y/o jefes
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
                      3. Resuelve problemas de forma tranquila y respetuosa
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
                      4. Trabaja bien con el equipo para cumplir las metas
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
                  <p>Compromiso, disciplina, cuidado de recursos</p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      1. Se esfuerza por cumplir las metas y tareas asignadas
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
                      2. Cuida las herramientas y materiales de la empresa
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
                      3. Es puntual, ordenado y disciplinado en su trabajo
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
                      4. Mantiene un ritmo de trabajo eficiente y con calidad
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

                {/************************* ADN 6 **************************/}

                <div className="adn-1">
                  <form onSubmit={onSubmitE1ADN5}>
                    <h4>SEGURIDAD</h4>

                    {/* Pregunta 1 */}
                    <div style={{ marginBottom: "16px" }}>
                      <label>
                        1. Usa correctamente los elementos de protección
                        personal (EPP)
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
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
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
                        2. Cumple los procedimientos de seguridad en su puesto
                        de trabajo
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
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
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
                      <label>3. Reporta condiciones o actos inseguros</label>
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
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
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
                        4. Mantiene el orden y la limpieza en su área de trabajo
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
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
                                pregunta4: e.target.value,
                              })
                            }
                          />
                          {valor}
                        </label>
                      ))}
                    </div>

                    {/* Pregunta 5 */}
                    <div style={{ marginBottom: "16px" }}>
                      <label>
                        5. Colabora en la identificación y prevención de riesgos
                      </label>
                      <br />
                      {opciones.map((valor, index) => (
                        <label
                          key={`p1-${valor}`}
                          style={{ marginRight: "10px" }}
                        >
                          <input
                            type="radio"
                            name="pregunta5"
                            value={valor}
                            onChange={(e) =>
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
                                pregunta5: e.target.value,
                              })
                            }
                          />
                          {valor}
                        </label>
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={idEvaluacion ? false : true}
                    >
                      Enviar
                    </button>
                  </form>
                </div>
                <br />
                <div>
                  <label htmlFor="observaciones">
                    <b style={{ color: "red" }}>*</b> Observaciones:
                  </label>
                  <p>Ten en cuenta las siguientes preguntas abiertas:</p>
                  <p>
                    ¿Qué observaciones podrías hacerle a tu colaborador para
                    mejorar en su trabajo?
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
