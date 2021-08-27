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
          <h1 id="logo-text" style={{ fontWeight: 600 }}>rigbldr</h1>
        </div>
        <div id="navigation-link-container">
          {
            navGenerator(
              menuItems, {
                ulStyle: {
                  display: 'flex',
                },
                liStyle: {
                  marginRight: 10,
                  marginLeft: 10,
                }
              }
            )
          }
        </div>
      </>
    )
  }
}


export default withRouter(Menu);
