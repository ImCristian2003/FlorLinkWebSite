/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ handlerCloseform, userSelected }) => {
  const { initialUserForm, handlerAddUser } = useContext(UserContext);

  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault(); //evitar que el formulario actualice la pagina cuando se envía

    if ((!username || !password || !email) && id == 0) {
      Swal.fire("Debes llenar el formulario!"); // Alertas personatulizadas con sweetalert2
      return;
    }

    if (!email.includes("@")) {
      Swal.fire("Error del formato del email!"); // Alertas personalizadas con sweetalert2
    }

    //guardar el user form en el listado de usuario
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseform = () => {
    handlerCloseform();
    setUserForm(initialUserForm);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {id > 0 || (
          <input
            type="password"
            className="form-control my-3 w-75"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        )}

        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="btn btn-primary">
          {id > 0 ? "Editar" : "Crear"}
        </button>

        {!handlerCloseform || (
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={onCloseform}
          >
            Cerrar
          </button>
        )}
      </form>
    </>
  );
};
