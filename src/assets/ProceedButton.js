import React, {useEffect} from 'react';

import './Button.css';

class ProceedButton extends React.Component {

  render () {
    const {
      redirect = false,
      size = 'rg',
      buttonClasses = [],
      textClasses = [],
      overrides = {},
      url
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
	    Proceed
        </span>

      </button>
    );

  }
}

export default ProceedButton;
