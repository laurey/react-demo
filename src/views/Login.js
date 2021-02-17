import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func
  };

  static defaultProps = {
    onLogin: function (params) {
      console.log('log in....');
      setTimeout(() => {
        console.log('logged in!');
      }, 1000);
    }
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { onLogin } = this.props;
    if (typeof onLogin === 'function') {
      onLogin();
    }
  };

  render() {
    return (
      <div>
        <h1>This is Login Page</h1>
        <button type="button" className="btn" onClick={this.handleLogin}>
          Log in
        </button>
      </div>
    );
  }
}
