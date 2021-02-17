import React, { Component } from 'react';

const withAuth = (WrappedComponent) => {
  return class ProtectedRoutes extends Component {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      const { isAuthenticated, history } = this.props;
      if (!isAuthenticated) {
        history.push('/login');
      }
    }

    componentDidMount() {
      this.hocComponent.afterRender('from hoc');
    }

    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
            ref={(c) => (this.hocComponent = c)}
          />
        </div>
      );
    }
  };
};

export default withAuth;
