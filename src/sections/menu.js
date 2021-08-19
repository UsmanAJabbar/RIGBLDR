import React from 'react';
import { withRouter } from "react-router-dom";

import {
  navGenerator
} from '../util/utils';

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {
      
    } =this.props;

    <div className="section" id="menu">
      <div id="logo">
        <span id="logo-text">rigbldr</span>
      </div>
      <div id="navigation-menu">
        {
          navGenerator(menuItems)
        }
      </div>
    </div>
  }
}

const menuItems = [
  'Home',
  'Build A PC',
  'Contact'
];

export default withRouter(Menu);
