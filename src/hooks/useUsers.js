import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getUSers = async () => {
    const result = await findAll();
    dispatch({
      type: "LoadingUsers",
      payload: result.data,
    });
  };

  const handlerAddUser = async (user) => {
    let response;

    if (user.id === 0) {
      response = await save(user);
    } else {
      response = await update(user);
    }

    dispatch({
      type: user.id === 0 ? "AddUser" : "UpdateUser",
      payload: response.data,
    });

    Swal.fire({
      title: user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      text:
        user.id === 0
          ? "El usuario ha sido creado con éxito"
          : "El usuario ha sido actualizado con éxito",
      icon: "success",
    });

    handlerCloseform();
    navigate("/users");
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        dispatch({
          type: "RemoveUser",
          payload: id,
        });
        Swal.fire({
          title: "Registro borrado!",
          text: "El registro ha sido eliminado exitosamente!",
          icon: "success",
        });
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenform = () => {
    setVisibleForm(true);
  };

  const handlerCloseform = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerOpenform,
    handlerCloseform,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    getUSers,
  };
};
