import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../routes/PrivateRoutes";
import "./AppBar.css";

export const AppBar = () => {
  const navigate = useNavigate();
  const routeAddUser = () => {
    navigate(`${PrivateRoutes.PARAM_ADD_USER}`);
  };

  const routeHome = () => {
    navigate(`${PrivateRoutes.PARAM_HOME}`);
  };

  const routeProfile = () => {
    navigate(`${PrivateRoutes.PARAM_OVERVIEW}`);
  };

  return (
    <div className="app-wrapper app-wrapper--dark">
      <button onClick={routeHome} id="homeButton" />
      <div className="add-user-wrapper">
        <label>Add</label>
        <button onClick={routeAddUser} id="addUser" />
        <label>User</label>
      </div>
      <button onClick={routeProfile} id="profileButton" />
    </div>
  );
};
