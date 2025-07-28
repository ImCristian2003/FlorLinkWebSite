/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { PerformanceEvaluation } from "../../../context/PerformanceEvaluation/PerformanceEvaluationContext";

export const AutoevaluacionModal = () => {
  const {
    empleados,
    createEvaluacion,
    createPregunta,
    idEvaluacion,
    setNewIdEvaluacion,
    setAutoevaluacionVisible,
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
        id_grupo_evaluacion: 3,
        id_evaluador: parseInt(evaluador),
        id_evaluado: 134,
        id_enfoque_evaluacion: 3,
        observaciones,
      });

      const idEvaluacionI = evaluacion.id_evaluacion_desempenio;
      setNewIdEvaluacion(evaluacion.id_evaluacion_desempenio);

      // 2. Crear preguntas asociadas
      const preguntasTexto = {
        pregunta1: "Soy auténtico y cercano con los demás",
        pregunta2: "Genero confianza siendo honesto",
        pregunta3: "Aprendo de otros y aplico lo aprendido",
        pregunta4: "Promuevo un ambiente colaborativo",
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
          "Procuro actualizar los conocimientos necesarios para mi rol",
        pregunta2: "Propongo mejoras o soluciones para mejorar los procesos",
        pregunta3: "Tomo iniciativa con agilidad",
        pregunta4: "Supero expectativas del cliente interno/externo",
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
        pregunta1: "Actúo con justicia y transparencia",
        pregunta2: "Me comunico con claridad y respeto",
        pregunta3: "Ayudo a resolver conflictos de forma constructiva",
        pregunta4: "Trabajo en equipo y contribuyo a elevar estándares",
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
        pregunta1: "Me comprometo con metas retadoras",
        pregunta2: "Uso recursos de forma consciente",
        pregunta3: "Soy disciplinado y consistente",
        pregunta4: "Me autogestiono y cuido la calidad",
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
        pregunta1: "Promuevo relaciones de confianza en mi equipo",
        pregunta2: "Impulso el aprendizaje y el desarrollo de mi equipo",
        pregunta3: "Escucho activamente y fomento colaboración",
        pregunta4: "Facilito solución de conflictos con conversaciones claras",
        pregunta5: "Defino metas retadoras y acompaño su logro",
        pregunta6: "Aseguro recursos y seguimiento para resultados",
      };

      const fechaActual = new Date().toISOString();

      for (const [key, calificacion] of Object.entries(respuestasE1ADN5)) {
        await createPregunta({
          id_evaluacion_desempeno: idEvaluacion,
          pregunta: preguntasTexto[key],
          calificacion,
          fecha: fechaActual,
          id_adn: 5,
        });
      }

      alert("Evaluación y respuestas guardadas exitosamente");
      setAutoevaluacionVisible(); // Cerrar modal
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
              <h5 className="modal-title">Autoevaluación</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setAutoevaluacionVisible();
                }}
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <h2>Bienvenido a tu autoevaluación de desempeño.</h2>
              <p>
                Este no es solo un formulario para asignar un número a tu
                trabajo. Es una herramienta para reflexionar sobre tus
                fortalezas, tus logros y también las áreas en las que puedes
                crecer. Tómate el tiempo de pensar sinceramente en cómo vives
                los pilares del ADN Deliflor en tu día a día. La autoevaluación
                es un acto de responsabilidad personal y una gran oportunidad
                para identificar acciones concretas que te permitan mejorar y
                aportar aún más al equipo y a la empresa. Responde con
                honestidad y compromiso. ¡Gracias por ser parte de este proceso
                de crecimiento compartido!
              </p>

              <select
                id="evaluador-select"
                value={evaluador}
                onChange={(e) => setEvaluador(e.target.value)}
              >
                <option value="">Selecciona tu nombre</option>
                {empleados.map((empleado) => (
                  <option
                    key={empleado.id_empleado}
                    value={empleado.id_empleado}
                  >
                    {empleado.nombre} {empleado.apellidos}
                  </option>
                ))}
              </select>

              {/* <select
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
              </select> */}

              <div className="adn-1">
                <form onSubmit={onSubmitE1ADN1}>
                  <h4>SOMOS PARA NUESTROS CLIENTES</h4>
                  <p>
                    Enfocado en cercanía, autenticidad, confianza, humildad,
                    aprendizaje.
                  </p>

                  {/* Pregunta 1 */}
                  <div style={{ marginBottom: "16px" }}>
                    <label>1. Soy auténtico y cercano con los demás</label>
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
                    <label>2. Genero confianza siendo honesto</label>
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
                    <label>3. Aprendo de otros y aplico lo aprendido</label>
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
                    <label>4. Promuevo un ambiente colaborativo</label>
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
                      1. Procuro actualizar los conocimientos necesarios para mi
                      rol
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
                      2. Propongo mejoras o soluciones para mejorar los procesos
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
                    <label>3. Tomo iniciativa con agilidad</label>
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
                      4. Supero expectativas del cliente interno/externo
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
                    <label>1. Actúo con justicia y transparencia</label>
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
                    <label>2. Me comunico con claridad y respeto</label>
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
                      3. Ayudo a resolver conflictos de forma constructiva
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
                      4. Trabajo en equipo y contribuyo a elevar estándares
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
                    <label>1. Me comprometo con metas retadoras</label>
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
                    <label>2. Uso recursos de forma consciente</label>
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
                    <label>3. Soy disciplinado y consistente</label>
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
                    <label>4. Me autogestiono y cuido la calidad</label>
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

                {/*********************** ADN 5 ***********************/}

                <div className="adn-2">
                  <form onSubmit={onSubmitE1ADN5}>
                    <h4>LÍDERES</h4>

                    {/* Pregunta 1 */}
                    <div style={{ marginBottom: "16px" }}>
                      <label>
                        1. Promuevo relaciones de confianza en mi equipo
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
                        2. Impulso el aprendizaje y el desarrollo de mi equipo
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
                      <label>
                        3. Escucho activamente y fomento colaboración
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
                        4. Facilito solución de conflictos con conversaciones
                        claras
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
                        5. Defino metas retadoras y acompaño su logro
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

                    {/* Pregunta 6 */}
                    <div style={{ marginBottom: "16px" }}>
                      <label>
                        6. Aseguro recursos y seguimiento para resultados
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
                              setRespuestasE1ADN5({
                                ...respuestasE1ADN5,
                                pregunta6: e.target.value,
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

                <div>
                  <label htmlFor="observaciones">
                    <b style={{ color: "red" }}>*</b> Observaciones:
                  </label>
                  <p>Ten en cuenta las siguientes preguntas abiertas:</p>
                  <p>
                    ¿Qué acciones concretas podrías implementar para vivir más
                    plenamente el ADN de Deliflor?
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
