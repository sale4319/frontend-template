import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetUsers } from "../api/useApitHooks";
import { UserContext } from "../providers/UserContext";

import "./UserTable.css";

export const UserTable = () => {
  useGetUsers();
  const { users } = useContext(UserContext);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    window.location.reload();
  };

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
                  className="action-button view"
                >
                  View
                </Link>
                <Link
                  to={`/editUser/${user.id}`}
                  className="action-button edit"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="action-button delete"
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
