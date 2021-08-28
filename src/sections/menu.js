import React from 'react';
import './menu.css'
import { withRouter } from "react-router-dom";

import {
  navGenerator
} from '../util/utils';

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
        </div>
      </>
    )
  }
}


export default withRouter(Menu);
