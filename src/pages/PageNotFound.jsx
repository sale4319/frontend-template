import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";
import { ActionButton } from "../shared/buttons/ActionButton";

export const PageNotFound = () => {
  const { routeHome } = useContext(RoutingContext);

  return (
    <div className="container">
      <h2>UPS are you lost?</h2>
      <ActionButton label="Go home" onClick={routeHome} />
    </div>
  );
};
