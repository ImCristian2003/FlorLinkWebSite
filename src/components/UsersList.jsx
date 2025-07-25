import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Update route</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email }) => (
            <UserRow id={id} username={username} email={email} key={id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
