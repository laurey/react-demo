import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Visualizer from '../components/Visualizer';

export default class Algo extends Component {
  render() {
    const { type } = this.props;
    return (
      <div style={{ minHeight: '50%', height: '80vh' }}>
        <p>type: {type}</p>
        <Visualizer />
      </div>
    );
  }
}

Algo.propTypes = {
  type: PropTypes.string
};

Algo.defaultProps = {
  type: ''
};
