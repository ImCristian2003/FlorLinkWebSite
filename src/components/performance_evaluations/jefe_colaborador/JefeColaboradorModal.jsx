/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { PerformanceEvaluation } from "../../../context/PerformanceEvaluation/PerformanceEvaluationContext";

export const JefeColaboradorModal = () => {
  const {
    setGrupoPrimarioVisible,
    empleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNewIdEvaluacion,
    setJefeColaboradorVisible,
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
        id_grupo_evaluacion: 2,
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
          "Demuestra autenticidad y cercanía al relacionarse con clientes internos o externos",
        pregunta2:
          "Fomenta vínculos de confianza siendo honesto y transparente",
        pregunta3: "Aprende de otros para mejorar su servicio",
        pregunta4:
          "Comparte y promueve espacios de integración y colaboración con compañeros o clientes",
        pregunta5:
          "(Líderes) Promueve en su equipo la construcción de relaciones de confianza con los públicos de interés",
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
          "Posee y actualiza los conocimientos necesarios para su cargo",
        pregunta2: "Propone ideas para mejorar o transformar procesos",
        pregunta3: "Actúa con iniciativa y agilidad para resolver problemas",
        pregunta4:
          "Se asegura de comprender y superar las expectativas del cliente interno o externo",
        pregunta5:
          "(Líderes) Promueve el desarrollo y el aprendizaje continuo de su equipo",
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
          "Actúa con justicia, transparencia y cuidado hacia sus compañeros",
        pregunta2: "Se comunica con claridad y frecuencia con otros equipos",
        pregunta3:
          "Participa en conversaciones valientes para resolver conflictos",
        pregunta4:
          "Contribuye a la mejora de los estándares del equipo para enfrentar retos del entorno",
        pregunta5:
          "(Líderes) Escucha de forma receptiva y promueve la colaboración entre equipos",
        pregunta6:
          "(Líderes) Facilita conversaciones transparentes para resolver conflictos",
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
          "Se reta a sí mismo saliendo de su zona de confort para cumplir metas",
        pregunta2: "Usa los recursos de forma consciente y disciplinada",
        pregunta3: "Es diligente, riguroso y consistente en su trabajo",
        pregunta4:
          "Demuestra autogestión y mantiene altos estándares de calidad y eficiencia",
        pregunta5:
          "(Líderes) Define metas retadoras para el equipo y acompaña su cumplimiento",
        pregunta6:
          "(Líderes) Provee recursos adecuados y hace seguimiento para asegurar resultados",
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
      setJefeColaboradorVisible(); // Cerrar modal
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
              <h5 className="modal-title">Evaluación Jefe a Colaborador</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setJefeColaboradorVisible();
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
                apoyar a tu colaborador a crecer profesional y personalmente.
                Responde con objetividad y compromiso. Hagamos de esta
                evaluación una herramienta real de desarrollo y alineación con
                nuestro ADN Deliflor.
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
                      1. Demuestra autenticidad y cercanía al relacionarse con
                      clientes internos o externos
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
                      2. Fomenta vínculos de confianza siendo honesto y
                      transparente
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
                    <label>3. Aprende de otros para mejorar su servicio</label>
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
                      4. Comparte y promueve espacios de integración y
                      colaboración con compañeros o clientes
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

                  {/* Pregunta 5 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Promueve en su equipo la
                      construcción de relaciones de confianza con los públicos
                      de interés
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
                            setRespuestasE1ADN1({
                              ...respuestasE1ADN1,
                              pregunta5: e.target.value,
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
                      1. Posee y actualiza los conocimientos necesarios para su
                      cargo
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
                      2. Propone ideas para mejorar o transformar procesos
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
                      3. Actúa con iniciativa y agilidad para resolver problemas
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
                      4. Se asegura de comprender y superar las expectativas del
                      cliente interno o externo
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

                  {/* Pregunta 5 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Promueve el desarrollo y el
                      aprendizaje continuo de su equipo
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
                            setRespuestasE1ADN2({
                              ...respuestasE1ADN2,
                              pregunta5: e.target.value,
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
                      1. Actúa con justicia, transparencia y cuidado hacia sus
                      compañeros
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
                      2. Se comunica con claridad y frecuencia con otros equipos
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
                      3. Participa en conversaciones valientes para resolver
                      conflictos
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
                      4. Contribuye a la mejora de los estándares del equipo
                      para enfrentar retos del entorno
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

                  {/* Pregunta 5 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Escucha de forma receptiva y
                      promueve la colaboración entre equipos
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
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
                              pregunta5: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 6 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Facilita conversaciones
                      transparentes para resolver conflictos
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta6"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN3({
                              ...respuestasE1ADN3,
                              pregunta6: e.target.value,
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
                      1. Se reta a sí mismo saliendo de su zona de confort para
                      cumplir metas
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
                      2. Usa los recursos de forma consciente y disciplinada
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
                      3. Es diligente, riguroso y consistente en su trabajo
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
                      4. Demuestra autogestión y mantiene altos estándares de
                      calidad y eficiencia
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

                  {/* Pregunta 5 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Define metas retadoras para el
                      equipo y acompaña su cumplimiento
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
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta5: e.target.value,
                            })
                          }
                        />
                        {valor}
                      </label>
                    ))}
                  </div>

                  {/* Pregunta 6 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>
                      <b>(Para líderes)</b> Provee recursos adecuados y hace
                      seguimiento para asegurar resultados
                    </label>
                    <br />
                    {opciones.map((valor, index) => (
                      <label
                        key={`p1-${valor}`}
                        style={{ marginRight: "10px" }}
                      >
                        <input
                          type="radio"
                          name="pregunta6"
                          value={valor}
                          onChange={(e) =>
                            setRespuestasE1ADN4({
                              ...respuestasE1ADN4,
                              pregunta6: e.target.value,
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
