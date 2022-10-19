import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetUsers } from "../api/apiUserHooks";
import { deleteUser } from "../api/apiUserFunctions";
import { UserContext } from "../providers/UserContext";

import "./UserTable.css";

export const UserTable = () => {
  useGetUsers();
  const { users } = useContext(UserContext);

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
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <div>
                <Link
                  to={`/viewUser/${user.id}`}
                  className="default-button view"
                >
                  View
                </Link>
                <Link
                  to={`/editUser/${user.id}`}
                  className="default-button edit"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="default-button delete"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
