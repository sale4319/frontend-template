import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { PrivateRoutes } from "../routes/PrivateRoutes";

const defaultValues = {
  routeAddUser: () => {},
  routeViewUser: () => {},
  routeHome: () => {},
  routeProfile: () => {},
  routeOverview: () => {},
};

export const RoutingContext = createContext(defaultValues);

export const RoutingProvider = ({ children }) => {
  const navigate = useNavigate();

  const routeAddUser = () => {
    navigate(`${PrivateRoutes.PARAM_ADD_USER}`);
  };

  const routeViewUser = () => {
    navigate(`${PrivateRoutes.PARAM_VIEW_USER}`);
  };

  const routeHome = () => {
    navigate(`${PrivateRoutes.PARAM_HOME}`);
  };

  const routeProfile = () => {
    navigate(`${PrivateRoutes.PARAM_PROFILE}`);
  };

  const routeOverview = () => {
    navigate(`${PrivateRoutes.PARAM_OVERVIEW}`);
  };

  return (
    <RoutingContext.Provider
      value={{
        routeAddUser,
        routeViewUser,
        routeHome,
        routeProfile,
        routeOverview,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};
