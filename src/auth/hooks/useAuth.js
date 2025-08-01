import { loginReducer } from "../pages/reducers/loginReducer";
import Swal from "sweetalert2";
import { useReducer } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = ({ username, password }) => {
    const isLogin = loginUser({ username, password });

    if (isLogin) {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );
      navigate("/desempenio");
    } else {
      Swal.fire({
        title: "Error login",
        text: "Usuario y/o contraseñas invalidos",
        icon: "error",
      });
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: "logout",
    });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
