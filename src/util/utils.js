import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const linkGen = (navText) => {
  return (navText === 'Home') ? '/' : '/' + navText.toLowerCase().split(' ').join('-');
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
          <li style={liStyle} className={liClassName} key={index}>
            <Link to={linkGen(navText)}>
              <span style={textStyle} className={textClassName}>{navText}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

const awaitfetchData = async (endpoint) => {
  const res = await axios.get(endpoint)

  console.log(
    'Res.data in awaitFetchData', res.data
  )

  return res.data;
}

export {
  navGenerator,
  linkGen,
  awaitfetchData
};
