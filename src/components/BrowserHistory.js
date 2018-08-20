import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class BSRouter extends Component {
  render() {

    return (
      <Router>
        {this.props.children}
      </Router>
    )
  }
}

export default BSRouter;