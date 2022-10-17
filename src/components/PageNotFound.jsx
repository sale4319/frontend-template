import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../routes/PrivateRoutes";
import "./PageNotFound.css";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_HOME}`);
  };

  return (
    <div className="container">
      <h2>UPS are you lost?</h2>
      <button type="button" className="glow-on-hover" onClick={routeChange}>
        Go home
      </button>
    </div>
  );
};
