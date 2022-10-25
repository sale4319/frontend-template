import React, { useContext } from "react";
import { UserContext } from "../providers/UserContext";

export const EditableRow = ({ handleCancelClick }) => {
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
          className="form-input"
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
          className="form-input"
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
          className="form-input"
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={onInputChange}
          value={email}
        />
      </td>
      <td>
        <button type="submit" id="confirm"></button>
        <button type="button" onClick={handleCancelClick} id="cancel"></button>
      </td>
    </tr>
  );
};
