import React from 'react';
import './Build.css'
import Part from './Part'

class Build extends React.Component {
  render() {
    return (
      <div className="buildComponent">
        <div className="buildHeader">
          <h1>PC</h1>
          <div>
            <h3>POWER</h3>
            <h3>600W</h3>
          </div>
          <div>
            <h3>LINK</h3>
            <h3>rigbldr.pro/1337</h3>
          </div>
          <div>
            <h3>TOTAL</h3>
            <h3>$7</h3>
          </div>
        </div>
        <table className="buildTable">
          <thead>
            <tr>
              <td><h3>Part</h3></td>
              <td><h3>Name</h3></td>
              <td><h3>Price</h3></td>
            </tr>
          </thead>
          <tbody>
            <Part />
            <Part />
            <Part />
          </tbody>
        </table>
      </div>
    )
  }
}

export default Build;
