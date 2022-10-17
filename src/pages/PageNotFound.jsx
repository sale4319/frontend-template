import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../routes/PrivateRoutes";
import { ActionButton } from "../shared/ActionButton";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_HOME}`);
  };

  return (
    <div className="container">
      <h2>UPS are you lost?</h2>
      <ActionButton label="Go home" onClick={routeChange} />
    </div>
  );
};
