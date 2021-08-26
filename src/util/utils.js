import React from 'react';
import { Link } from 'react-router-dom';

const linkGen = (navText) => {
  return (navText === 'Home') ? '/' : navText.toLowerCase().split(' ').join('-');
}

/**
 * navGenerator - generates React links with the link and text
 * @param {@array} menuItems
 * @param {@string} className
 * @returns: Returns an array of React links
 */
const navGenerator = (menuItems = [], options = {}) => {
  const {
    ulClassName = '',
    liClassName = '',
    textClassName = '',
    ulStyle = {},
    liStyle = {},
    textStyle = {}
  } = options;

  return (
    <ul style={ulStyle} className={ulClassName}>
      {
        menuItems.map((navText, index) => (
          <li style={liStyle} className={liClassName}>
            <Link to={linkGen(navText)} key={index}>
              <span style={textStyle} className={textClassName}>{navText}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export {
  navGenerator,
  linkGen
};
