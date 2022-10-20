import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../api/apiUserHooks";
import { editUser } from "../api/apiUserFunctions";
import { UserContext } from "../providers/UserContext";
import { RoutingContext } from "../providers/RoutingContext";
import "./Style.css";

export const EditUser = () => {
  const { id } = useParams();
  const { routeOverview } = useContext(RoutingContext);

  useGetUser();

  const { user, setUser } = useContext(UserContext);
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    editUser(`https://backend-service-rest.herokuapp.com/user/${id}`, user);
    routeOverview();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="form">
      <h1>Edit</h1>
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
        <button type="submit" className="form-button submit">
          Submit
        </button>
        <button onClick={routeOverview} className="form-button cancel">
          Cancel
        </button>
      </span>
    </form>
  );
};
