import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../assets/Button';

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <Link to='/build'>
        <Button size='lg' >
          Build A PC
        </Button>
      </Link>
    );
  }
}

export default Home;
