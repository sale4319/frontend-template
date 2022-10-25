import React from "react";
import "./LoadingSpinner.css";

export const LoadingSpinner = () => {
  return (
    <div className="container">
      <h1 className="loading-text">
        Loading data from
        <a
          rel="noreferrer"
          className="link-text"
          target="_blank"
          href="https://www.heroku.com/"
        >
          &nbsp;HEROKU
        </a>
        ,
        <br /> try to refresh page after a minute or two...
      </h1>
      <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};
