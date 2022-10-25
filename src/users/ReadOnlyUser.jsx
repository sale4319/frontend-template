import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";
import { deleteUser } from "../api/apiUserFunctions";
import { IconButton } from "../shared/buttons/IconButton";

export const ReadOnlyUser = ({ user, handleEditClick }) => {
  const { routeViewUser } = useContext(RoutingContext);
  return (
    <tr>
      <td>
        <IconButton
          type="button"
          onClick={() => routeViewUser(user.id)}
          id="viewUser"
        />
      </td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <IconButton
          type="button"
          onClick={(event) => handleEditClick(event, user)}
          id="editUser"
        />
        <IconButton
          type="button"
          onClick={() => deleteUser(user.id)}
          id="deleteUser"
        />
      </td>
    </tr>
  );
};
