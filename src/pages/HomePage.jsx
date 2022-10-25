import React, { useContext } from "react";
import { ActionButton } from "../shared/buttons/ActionButton";
import { RoutingContext } from "../providers/RoutingContext";

export const HomePage = () => {
  const { routeOverview } = useContext(RoutingContext);
  return (
    <>
      <h1 className="gradient-text">
        They always tell me: <br />
        "Wow you have such a nice home page!
        <br />
        Great homepage, it is very useful!
        <br /> Your app would now work without it!"
        <br />
        I am well aware of these facts, but anyway...
        <br /> Here is a button that you can click to go to overview...
      </h1>
      <ActionButton onClick={routeOverview} label="Go to overview" />
    </>
  );
};
