import React, { Component } from 'react';
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router
} from 'react-router-dom';

import PropTypes from 'prop-types';
import NoMatch from './components/NoMatch';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Footer from './components/Footer';

import Home from './views/Home';
import Algo from './views/Algo';
import Profile from './views/Profile';
import BasicDemo from './views/BasicDemo';
import withAuth from './views/ProtectedHOC';
import Login from './views/Login';

const ProtectedProfile = withRouter(withAuth(Profile));

export default class App extends Component {
  static propTypes = {
    routes: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    if (this.component) {
      this.component.hocComponent.afterRender('from app');
    }
  }

  handleLogin = (data) => {
    setTimeout(() => {
      console.log('logged in');
      this.setState({
        isAuthenticated: true
      });
    }, 2000);
  };

  render() {
    const { isAuthenticated } = this.state;
    const { routes = [] } = this.props;

    return (
      <Router>
        <Header>
          <Navigator routes={routes} />
        </Header>
        <main style={{ padding: 24, minHeight: '80vh' }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/algo">
              <Algo />
            </Route>
            <Route path="/basic">
              <BasicDemo />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login onLogin={this.handleLogin} />
            </Route>
            <Route path="/protected_profile">
              <ProtectedProfile
                isAuthenticated={isAuthenticated}
                wrappedComponentRef={(c) => (this.component = c)}
              />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </main>
        <Footer content="Footer Content" />
      </Router>
    );
  }
}
