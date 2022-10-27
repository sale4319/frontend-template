import React, { useContext, useState } from "react";
import { addUser } from "../../api/apiUserFunctions";
import { RoutingContext } from "../../providers/RoutingContext";
import { FormButton } from "../../shared/buttons/FormButton";

export const AddUser = () => {
  const { routeOverview } = useContext(RoutingContext);
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await addUser(user);
    routeOverview();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="form">
      <h1>Regiser</h1>
      <span>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter the name"
          required="required"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter the username"
          required="required"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          placeholder="Enter the email"
          required="required"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <FormButton
          disabled={!user.name || !user.username || !user.email}
          type="submit"
          id={
            !user.name || !user.username || !user.email ? "disabled" : "submit"
          }
          label="Submit"
        />
        <FormButton
          onClick={routeOverview}
          type="button"
          id="back"
          label="Cancel"
        />
      </span>
    </form>
  );
};
