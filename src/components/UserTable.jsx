import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserTable.css";

export const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
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
          <tr>
            <th key={index}>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className="action-button view">View</button>
              <button className="action-button edit">Edit</button>
              <button className="action-button delete">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
