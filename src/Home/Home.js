import React from 'react';

import Button from '../assets/Button';

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <a href='/build-a-pc'>
        <Button text={'Build a PC'} size="lg" />
      </a>
    );
  }
}

export default Home;
