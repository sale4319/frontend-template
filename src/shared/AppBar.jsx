import React, { useContext } from "react";
import { RoutingContext } from "../providers/RoutingContext";

import "./AppBar.css";

export const AppBar = () => {
  const { routeAddUser, routeHome, routeProfile } = useContext(RoutingContext);

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
