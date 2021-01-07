/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Props Proxy and state abstraction demonstration
function PPHOC(WrappedComponent) {
  return class _PPHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = { fields: {} };
    }

    getField(fieldName) {
      const { fields } = this.state;
      if (!fields[fieldName]) {
        fields[fieldName] = {
          value: '',
          onChange: (event) => {
            fields[fieldName].value = event.target.value;
            // this.forceUpdate();
            this.setState({ fields });
          }
        };
      }

      return {
        value: fields[fieldName].value,
        onChange: fields[fieldName].onChange
      };
    }

    render() {
      const newProps = {
        ...this.props,
        fields: this.getField.bind(this)
      };

      return (
        <div>
          <h2>PP HOC</h2>
          <p>I&apos;m a Props Proxy HOC that abstracts controlled inputs</p>
          <WrappedComponent {...newProps} />
        </div>
      );
    }
  };
}

export default PPHOC;
