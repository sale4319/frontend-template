import React from "react";
import "./IconButton.css";

export const IconButton = ({ onClick, id, type }) => {
  return (
    <button type={type} className="icon-button" id={id} onClick={onClick} />
  );
};
