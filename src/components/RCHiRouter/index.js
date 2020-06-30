import React from "react";
import { HashRouter as Router } from "react-router-dom";

const RCHiRouter = (props) => {
  return <Router>{props.children}</Router>;
};

export default RCHiRouter;
