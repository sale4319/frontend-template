import React, { useContext } from "react";
import { ActionButton } from "../shared/ActionButton";
import { RoutingContext } from "../providers/RoutingContext";

export const HomePage = () => {
  const { routeOverview } = useContext(RoutingContext);
  return <ActionButton onClick={routeOverview} label="Go to overview" />;
};
