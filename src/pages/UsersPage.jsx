import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";
//import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const {
    users,
    visibleForm,
    handlerOpenform,
    handlerRemoveUser,
    handlerUserSelectedForm,
    getUSers,
  } = useContext(UserContext);

  useEffect(() => {
    getUSers();
  }, []);

  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="container my-4">
        <h1>Users App</h1>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button
                className="btn btn-primary my-3"
                onClick={handlerOpenform}
              >
                Nuevo usuario
              </button>
            )}
            {users?.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios en el sistema
              </div>
            ) : (
              <UsersList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
