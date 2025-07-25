/* eslint-disable react/prop-types */
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const {
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
  } = useUsers();

  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
