import React from 'react';
import './menu.css'
import { withRouter } from "react-router-dom";

import {
  navGenerator
} from '../util/utils';

class Menu extends React.Component {
  render () {
    return (
    <div className="section" id="menu">
      <div id="logo">
        <h1 id="logo-text">rigbldr</h1>
      </div>
      <div id="navigation-menu">
        {
          navGenerator(menuItems)
        }
        <span className="dot"></span>
        <span className="dot2"></span>
      </div>
    </div>
    )
  }
}

const menuItems = [
  'Home',
  'Build A PC',
  'Contact'
];

export default withRouter(Menu);
