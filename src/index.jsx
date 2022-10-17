import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RoutingProvider } from "./providers/RoutingContext";
import { UserProvider } from "./providers/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RoutingProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </RoutingProvider>
    </Router>
  </React.StrictMode>
);
