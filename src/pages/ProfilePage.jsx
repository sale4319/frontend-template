import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";
import { FormButton } from "../shared/buttons/FormButton";

export const ProfilePage = () => {
  const { routeOverview } = useContext(RoutingContext);

  return (
    <div className="form">
      <h1>Profile</h1>
      <span>
        <label className="form-label" htmlFor="name">
          <b className="font-color">Name: </b>
          Aleksandar
        </label>
      </span>
      <span>
        <label className="form-label" htmlFor="username">
          <b className="font-color">Surname: </b>
          Stojanovic
        </label>
      </span>
      <span>
        <label className="form-label" htmlFor="email">
          <b className="font-color">Github: </b>
        </label>
        <a
          href={"https://github.com/sale4319"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="githubButton" alt="logo" />
        </a>
      </span>
      <span>
        <FormButton
          onClick={routeOverview}
          id="submit"
          type="button"
          label="Go back"
        />
      </span>
    </div>
  );
};
