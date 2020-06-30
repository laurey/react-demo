import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const RCRouter = (props) => {
  return <Router>{props.children}</Router>;
};

export default RCRouter;
