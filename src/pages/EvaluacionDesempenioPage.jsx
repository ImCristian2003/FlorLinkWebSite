/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { PerformanceEvaluation } from "../context/PerformanceEvaluation/PerformanceEvaluationContext";
import { GrupoPrimarioLiderazgoModal } from "../components/performance_evaluations/grupo_primario/GrupoPrimarioLiderazgoModal";
import { GrupoPrimarioEstrategiaModal } from "../components/performance_evaluations/grupo_primario/GrupoPrimarioEstrategiaModal";
import { JefeColaboradorModal } from "../components/performance_evaluations/jefe_colaborador/JefeColaboradorModal";
import { AutoevaluacionModal } from "../components/performance_evaluations/autoevaluacion/AutoevaluacionModal";
import { ColaboradorJefeModal } from "../components/performance_evaluations/colaborador_jefe/ColaboradorJefeModal";
import { JefeOperarioModal } from "../components/performance_evaluations/jefe_operario/JefeOperarioModal";
// import { OfrecimientoList } from "../components/reserva/ofrecimiento/OfrecimientoList";

export const EvaluacionDesempenioPage = () => {
  const {
    getEmpleados,
    setNullIdEvaluacion,
    setGrupoPrimarioLVisible,
    visibleGrupoPrimarioL,
    setGrupoPrimarioEVisible,
    visibleGrupoPrimarioE,
    setJefeColaboradorVisible,
    visibleJefeColaborador,
    setAutoevaluacionVisible,
    visibleAutoevaluacion,
    setColaboradorJefeVisible,
    visibleColaboradorJefe,
    setJefeOperarioVisible,
    visibleJefeOperario,
  } = useContext(PerformanceEvaluation);

  useEffect(() => {
    getEmpleados();
  }, []);

  return (
    <>
      {visibleGrupoPrimarioL && (
        <GrupoPrimarioLiderazgoModal></GrupoPrimarioLiderazgoModal>
      )}

      {visibleGrupoPrimarioE && (
        <GrupoPrimarioEstrategiaModal></GrupoPrimarioEstrategiaModal>
      )}

      {visibleJefeColaborador && <JefeColaboradorModal></JefeColaboradorModal>}

      {visibleAutoevaluacion && <AutoevaluacionModal></AutoevaluacionModal>}

      {visibleColaboradorJefe && <ColaboradorJefeModal></ColaboradorJefeModal>}

      {visibleJefeOperario && <JefeOperarioModal></JefeOperarioModal>}

      <div className="container-fluid container-ofrecimiento">
        <h1 className="title-evaluation">Evaluaciones de desempeño</h1>
        <div className="buttons-container">
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setGrupoPrimarioLVisible();
              setNullIdEvaluacion();
            }}
          >
            Grupo Primario - Liderazgo
          </button>
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setGrupoPrimarioEVisible();
              setNullIdEvaluacion();
            }}
          >
            Grupo Primario - Estrategia
          </button>
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setJefeColaboradorVisible();
              setNullIdEvaluacion();
            }}
          >
            Jefe a Colaborador
          </button>
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setAutoevaluacionVisible();
              setNullIdEvaluacion();
            }}
          >
            Autoevaluación
          </button>
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setColaboradorJefeVisible();
              setNullIdEvaluacion();
            }}
          >
            Colaborador a Jefe
          </button>
          <button
            type="button"
            className="btn btn-estimados"
            onClick={() => {
              setJefeOperarioVisible();
              setNullIdEvaluacion();
            }}
          >
            Jefe a Colaborador (Operarios)
          </button>
        </div>

        {/* <div className="cont-search">
          <div className="cont-filters">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar por nombre"
              onChange={onInputSearchChange}
            ></input>
            <select className="form-select" onChange={onInputFincaChange}>
              <option value="">Todas las fincas</option>
              {dataFincaDist.map((finca) => (
                <option value={finca} key={finca}>
                  {finca}
                </option>
              ))}
            </select>
            <select className="form-select" onChange={onInputGradoChange}>
              <option value="">Todos los grados</option>
              {dataGradoDist.map((finca) => (
                <option value={finca} key={finca}>
                  {finca}
                </option>
              ))}
            </select>
          </div>
          <div className="cont-modals">
            <button
              type="button"
              className="btn btn-estimados"
              onClick={() => {
                setEstimadosVisible();
              }}
            >
              Estimados
            </button>
          </div>
        </div>
        {loading ? (
          <div className="alert alert-info">Cargando...</div>
        ) : (
          <OfrecimientoList></OfrecimientoList>
        )} */}
      </div>
    </>
  );
};
