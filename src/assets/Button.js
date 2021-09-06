import React from 'react';

import './Button.css';

class Button extends React.Component {
  render () {
    const {
      size = 'rg',
      buttonClasses = [],
      textClasses = [],
      overrides = {},
      children
    } = this.props;

    const params = {
      lg: {
        button: { padding: '0.4rem 4rem 0.6rem' },
        text: { letterSpacing: '-0.12rem', fontSize: '2rem' },
      },
      rg: {
        button: { padding: '0.2rem 1.2rem 0.4rem' }
      }
    }

    return (
      <button
        style={{ ...overrides.button, ...params[size]?.button }}
        className={ buttonClasses.join(' ') || 'defaultButton' }
      >
        <span
          style={{ ...overrides.text, ...params[size]?.text }}
          className={textClasses.join(' ')}
        >
          {children}
        </span>

      </button>
    );

  }
}

export default Button;
