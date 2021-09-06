import React from 'react';

import './ContextBox.css';

class ContentBox extends React.Component {
  render () {

    const {
      children,
      overrides,
    } = this.props;

    return (
      <div
        style={overrides}
        className={'contextBox'}
      >
        {children}
      </div>
    );

  }
}

export default ContentBox;
