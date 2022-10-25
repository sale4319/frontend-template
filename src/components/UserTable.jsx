import React, { useState, useContext, Fragment } from "react";
import { useGetUsers } from "../api/apiUserHooks";
import { editUser } from "../api/apiUserFunctions";
import { UserContext } from "../providers/UserContext";
import { ReadOnlyUser } from "../users/ReadOnlyUser";
import { EditableRow } from "../users/EditableRow";

import "./UserTable.css";

export const UserTable = () => {
  useGetUsers();
  const { users, user, setUser } = useContext(UserContext);

  const [editUserId, setEditUserId] = useState(null);

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      username: user.username,
      email: user.email,
    };
    setUser(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };

    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);
    newUsers[index] = editedUser;

    editUser(editUserId, user);
    setEditUserId(null);
  };

  return (
    <form className="form-table" onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>View</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Fragment key={index}>
              {editUserId === user.id ? (
                <EditableRow />
              ) : (
                <ReadOnlyUser user={user} handleEditClick={handleEditClick} />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  );
};