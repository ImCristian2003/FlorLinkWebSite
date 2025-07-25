import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";
import { EvaluacionDesempenioPage } from "../pages/EvaluacionDesempenioPage";
import { OfrecimientoProvider } from "../context/Ofrecimiento/OfrecimientoProvider";
import { EstimadoProvider } from "../context/Estimado/EstimadoProvider";
import { ReservaProvider } from "../context/Reserva/ReservaProvider";
import { ReservasOfrecimPage } from "../pages/ReservasOfrecimPage";
import { PerformanceEvaluationProvider } from "../context/PerformanceEvaluation/PerformanceEvaluationProvider";

export const UserRoutes = () => {
  return (
    <>
      <UserProvider>
        <OfrecimientoProvider>
          <EstimadoProvider>
            <ReservaProvider>
              <PerformanceEvaluationProvider>
                <Navbar />
                <Routes>
                  <Route path="users" element={<UsersPage />} />
                  <Route path="users/register" element={<RegisterPage />} />
                  <Route path="users/edit/:id" element={<RegisterPage />} />

                  <Route
                    path="/desempenio"
                    element={<EvaluacionDesempenioPage />}
                  />
                  <Route
                    path="ofrecimiento/reservas"
                    element={<ReservasOfrecimPage />}
                  />

                  {/* <Route path="listaejemplo" element={<PracList></PracList>} /> */}

                  <Route path="/" element={<Navigate to="/desempenio" />} />
                </Routes>
              </PerformanceEvaluationProvider>
            </ReservaProvider>
          </EstimadoProvider>
        </OfrecimientoProvider>
      </UserProvider>
    </>
  );
};
