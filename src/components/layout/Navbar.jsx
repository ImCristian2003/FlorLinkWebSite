import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
// import { FiUsers } from "react-icons/fi";
// import { FiUserPlus } from "react-icons/fi";
// import { FaRegBookmark } from "react-icons/fa";
import { OfrecimientoContext } from "../../context/Ofrecimiento/OfrecimientoContext";

export const Navbar = () => {
  const { login, handlerLogout } = useContext(AuthContext);

  const { resetSearch } = useContext(OfrecimientoContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid py-2 container-nav">
          <a className="navbar-brand" href="#">
            FlorLink
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/desempenio"
                  onClick={resetSearch}
                >
                  <MdOutlineAssignmentTurnedIn
                    size={22}
                    style={{ margin: "0 10px 0 0" }}
                  />
                  Evaluación Desempeño
                </NavLink>
              </li>
              {/* <li className="nav-item mx-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/users"
                >
                  <FiUsers size={22} style={{ margin: "0 10px 0 0" }} />
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/users/register"
                >
                  <FiUserPlus size={22} style={{ margin: "0 10px 0 0" }} />
                  Registrar Usuario
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/ofrecimiento/reservas"
                >
                  <FaRegBookmark size={22} style={{ margin: "0 10px 0 0" }} />
                  Reservas
                </NavLink>
              </li> */}
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavLogout"
          >
            <span className="nav-item mx-4 a-rol">{login.user?.username}</span>
            <button
              className="btn btn btn-outline-success"
              onClick={handlerLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
