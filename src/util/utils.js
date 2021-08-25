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
const navGenerator = (menuItems = [], className = '') => {
  return menuItems.map(
    (navText, index) => (
        <Link to={ linkGen(navText) } className={className} key={index}>
          <span>{navText}</span>
        </Link>
    )
  );
}

export {
  navGenerator,
  linkGen
};
