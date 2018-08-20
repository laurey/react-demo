import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";

class HSRouter extends Component {
  render() {

    return (
      <Router>
        {this.props.children}
      </Router>
    )
  }
}

export default HSRouter;