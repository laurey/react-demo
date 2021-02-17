import React, { Component } from 'react';

export default class Profile extends Component {
  afterRender = (data) => {
    console.log('from profile');
    console.log('after render...');
    console.log('data: ', data);
  };

  render() {
    return <div>this is profile page</div>;
  }
}
