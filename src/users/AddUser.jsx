import React, { useContext, useState } from "react";
import { addUser } from "../api/apiUserFunctions";
import { RoutingContext } from "../providers/RoutingContext";
import "./Style.css";

export const AddUser = () => {
  const { routeOverview } = useContext(RoutingContext);
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addUser(user);
    routeOverview();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="form">
      <h1>Regiser</h1>
      <span>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter the name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter the username"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter the email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
      </span>
      <span>
        <button
          disabled={!user.name || !user.username || !user.email}
          type="submit"
          className={
            !user.name || !user.username || !user.email
              ? "form-button disabled"
              : "form-button submit"
          }
        >
          Submit
        </button>
        <button onClick={routeOverview} className="form-button cancel">
          Cancel
        </button>
      </span>
    </form>
  );
};
