import React from 'react';

export default function DebuggerHOC(WrappedComponent) {
  return class _DebuggerHOC extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          {/* <p>Props</p>
          <pre>{JSON.stringify(this.props)}</pre> */}
          <p>State</p>
          <pre>{JSON.stringify(this.state)}</pre>
          {super.render()}
        </div>
      );
    }
  };
}
