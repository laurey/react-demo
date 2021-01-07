/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PPHOC from '../components/PPHOC';
import DebuggerHOC from '../components/DebuggerHOC';

class Example extends React.Component {
  render() {
    const { fields } = this.props;
    return (
      <div>
        <h2>Wrapped Example Component</h2>
        {/* <p>Props</p>
        <pre>{JSON.stringify(this.props)}</pre> */}
        <form>
          <label htmlFor="email">
            controlled input!
            <input type="email" id="email" {...fields('email')} />
          </label>
        </form>
      </div>
    );
  }
}

const EnhancedExample = DebuggerHOC(PPHOC(Example));

export default EnhancedExample;
