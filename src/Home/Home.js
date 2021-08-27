import React from 'react';

import Button from '../assets/Button';

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <a href='/build'>
        <Button overrides={{ text: { fontSize: '2rem', letterSpacing: '-0.12rem' } }} >
          Build A PC
        </Button>
      </a>
    );
  }
}

export default Home;
