import React from 'react';

import './button.css';

class Button extends React.Component {
  render () {
    const {
      text = '',
      buttonClasses = [],
      textClasses = [],
      overrides = {}
    } = this.props;

    return (
      <button style={overrides.button} className={buttonClasses.join(' ') || 'defaultButton'}>
        <span style={overrides.text} className={textClasses.join(' ')}>{text}</span>
      </button>
    );
  }
}

export default Button;
