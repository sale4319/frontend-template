import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";
import { deleteUser } from "../api/apiUserFunctions";

export const ReadOnlyUser = ({ user, handleEditClick }) => {
  const { routeViewUser } = useContext(RoutingContext);
  return (
    <tr>
      <td>
        <button onClick={() => routeViewUser(user.id)} id="viewUser"></button>
      </td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, user)}
          id="editUser"
        ></button>
        <button onClick={() => deleteUser(user.id)} id="deleteUser"></button>
      </td>
    </tr>
  );
};
