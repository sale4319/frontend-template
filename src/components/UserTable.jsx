import React, { useContext } from "react";
import { useGetUsers } from "../api/useGetUsers";
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
                <button className="action-button view">View</button>
                <button className="action-button edit">Edit</button>
                <button className="action-button delete">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
