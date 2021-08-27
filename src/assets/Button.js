import React from 'react';

import './button.css';

class Button extends React.Component {
  render () {
    const {
      buttonClasses = [],
      textClasses = [],
      overrides = {},
      children
    } = this.props;

    return (
      <button style={overrides.button} className={buttonClasses.join(' ') || 'defaultButton'}>
        <span style={overrides.text} className={textClasses.join(' ')}>{children}</span>
      </button>
    );
  }
}

export default Button;
