import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
  username: "",
  password: "",
};
export const LoginPage = () => {
  const { handlerLogin } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      Swal.fire(
        "Error de validacion",
        "Username y password requeridos",
        "error"
      );
    }

    // aca implementamos el login
    handlerLogin({ username, password });

    setLoginForm(initialLoginForm);
  };
  return (
    <div className="container-fluid container-login">
      <div className="container-left">
        <div className="container-left-det">
          <h2>Inicio de Sesión</h2>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              className="form-control my-3"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />

            <input
              className="form-control my-3"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="container-right"></div>
    </div>
  );
};
