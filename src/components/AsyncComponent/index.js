import React, { Component } from 'react';

export default function AsyncComponent(importComponent) {
  class AsyncImportedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component
      });
    }

    render() {
      const { component: C } = this.state;

      // eslint-disable-next-line react/jsx-props-no-spreading
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncImportedComponent;
}
