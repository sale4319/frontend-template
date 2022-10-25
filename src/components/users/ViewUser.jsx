import React, { useContext } from "react";
import { useGetUser } from "../../api/apiUserHooks";
import { RoutingContext } from "../../providers/RoutingContext";
import { UserContext } from "../../providers/UserContext";
import { FormButton } from "../../shared/buttons/FormButton";

export const ViewUser = () => {
  const { routeOverview } = useContext(RoutingContext);

  useGetUser();
  const { user } = useContext(UserContext);

  return (
    <div className="form">
      <h1>User Details</h1>
      <span>
        <label className="form-label" htmlFor="name">
          <b className="font-color">Name: </b>
          {user.name}
        </label>
      </span>
      <span>
        <label className="form-label" htmlFor="username">
          <b className="font-color">Username: </b>
          {user.username}
        </label>
      </span>
      <span>
        <label className="form-label" htmlFor="email">
          <b className="font-color">Email: </b>
          {user.email}
        </label>
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
