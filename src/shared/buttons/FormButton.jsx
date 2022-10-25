import React from "react";
import "./FormButton.css";

export const FormButton = ({ label, id, type, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      id={id}
      className="form-button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
