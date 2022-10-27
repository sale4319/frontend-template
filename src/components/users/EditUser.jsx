import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { IconButton } from "../../shared/buttons/IconButton";

export const EditUser = ({ handleCancelClick }) => {
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
          value={email}
        />
      </td>
      <td>
        <IconButton type="submit" id="confirm" />
        <IconButton type="button" id="cancel" onClick={handleCancelClick} />
      </td>
    </tr>
  );
};
