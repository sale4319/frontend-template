import React from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../shared/ActionButton";
import { PrivateRoutes } from "../routes/PrivateRoutes";

export const HomePage = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_OVERVIEW}`);
  };
  return <ActionButton onClick={routeChange} label="Overview" />;
};
