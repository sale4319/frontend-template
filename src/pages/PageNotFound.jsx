import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";
import { ActionButton } from "../shared/buttons/ActionButton";

export const PageNotFound = () => {
  const { routeHome } = useContext(RoutingContext);

  return (
    <div className="container">
      <h1 className="gradient-text">UPS are you lost?</h1>
      <ActionButton label="Go home" onClick={routeHome} />
    </div>
  );
};
