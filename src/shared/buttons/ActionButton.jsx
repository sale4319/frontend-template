import React from "react";
import "./ActionButton.css";

export const ActionButton = ({ label, onClick }) => {
  return (
    <button type="button" className="glow-on-hover" onClick={onClick}>
      {label}
    </button>
  );
};
