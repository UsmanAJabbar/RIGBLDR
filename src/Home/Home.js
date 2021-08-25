import React from 'react';
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="Home-section">
        <a href='/build-a-pc'>
          <span className="Build-button">Build a PC</span>
        </a>
      </div>
    );
  }
}

export default Home;
