import React, { useContext } from "react";
import { useGetUser } from "../api/useApitHooks";
import { RoutingContext } from "../providers/RoutingContext";
import { UserContext } from "../providers/UserContext";
import "./Style.css";

export const ViewUser = () => {
  const { routeOverview } = useContext(RoutingContext);

  useGetUser();
  const { user } = useContext(UserContext);

  return (
    <div className="form">
      <h1>User Details for user: {user.id}</h1>
      <span>
        <label htmlFor="name">Name: {user.name}</label>
      </span>
      <span>
        <label htmlFor="username">Username: {user.username}</label>
      </span>
      <span>
        <label htmlFor="email">Email: {user.email}</label>
      </span>
      <span>
        <button onClick={routeOverview} className="form-button submit">
          Go Back
        </button>
      </span>
    </div>
  );
};
