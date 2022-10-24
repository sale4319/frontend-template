import React, { useContext } from "react";
import { useGetUsers } from "../api/apiUserHooks";
import { deleteUser } from "../api/apiUserFunctions";
import { UserContext } from "../providers/UserContext";
import { RoutingContext } from "../providers/RoutingContext";
import { ReadOnlyUser } from "../users/ReadOnlyUser";

import "./UserTable.css";

export const UserTable = () => {
  useGetUsers();
  const { users } = useContext(UserContext);
  const { routeEditUser, routeViewUser } = useContext(RoutingContext);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <ReadOnlyUser user={user} index={index} />
            <td>
              <div>
                <button
                  onClick={() => routeViewUser(user.id)}
                  id="viewUser"
                ></button>
                <button
                  onClick={() => routeEditUser(user.id)}
                  id="editUser"
                ></button>
                <button
                  onClick={() => deleteUser(user.id)}
                  id="deleteUser"
                ></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
