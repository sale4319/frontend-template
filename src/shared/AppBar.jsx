import React from "react";
import "./AppBar.css";

export const AppBar = () => {
  return (
    <header>
      <div className="app-wrapper app-wrapper--dark">
        <label>Add</label>
        <button id="darkMode"></button>
        <label>User</label>
      </div>
    </header>
  );
};
