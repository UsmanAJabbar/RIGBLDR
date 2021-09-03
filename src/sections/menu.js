import React from 'react';
import './menu.css'
import { withRouter } from "react-router-dom";

import {
  navGenerator
} from '../util/utils';

function colorInvert() {
  console.log('ye')
  let color = 'invert(100%)';
  let back = 'black'
  if (document.body.style.filter == 'invert(100%)') {
    color = 'invert(0%)'
    back = 'white'
  }
  document.body.style.filter = color
  document.documentElement.style.backgroundColor = back
}

class Menu extends React.Component {
  render () {
    const menuItems = this.props.menuItems;
    return (
      <>
        <div id="logo">
          <a href="/">
            <h1 id="logo-text" style={{ fontWeight: 600 }}>rigbldr</h1>
          </a>
        </div>
        <div id="navigation-link-container">
          {
            navGenerator(
              menuItems, {
                ulStyle: { display: 'flex' },
                liStyle: { margin: '0 10px 0 10px' }
              }
            )
          }
          <div>
            <span className="dot" onClick={() => colorInvert()}></span>
            <span className="dot2" onClick={() => colorInvert()}></span>
          </div>
        </div>
      </>
    )
  }
}


export default withRouter(Menu);
