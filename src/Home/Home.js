import React from 'react';

import Button from '../assets/Button';

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <a href='/build'>
        <Button text={'Build a PC'} overrides={{ text: { fontSize: '2rem', letterSpacing: '-0.12rem' } }} />
      </a>
    );
  }
}

export default Home;
