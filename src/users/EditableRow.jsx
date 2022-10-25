import React, { useContext } from "react";
import { UserContext } from "../providers/UserContext";

export const EditableRow = () => {
  const { user, setUser } = useContext(UserContext);
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name"
          onChange={onInputChange}
          value={name}
        />
      </td>
      <td>
        <input
          type="text"
          name="username"
          required="required"
          placeholder="Enter a pn"
          onChange={onInputChange}
          value={username}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={onInputChange}
          value={email}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
};
