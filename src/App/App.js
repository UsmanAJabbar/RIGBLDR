// Import modules 
import React from 'react';
import './App.css'
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Import React components
import Menu from '../sections/menu';
import Home from '../Home/Home';
import Build from '../Build/Build';
import Contact from '../Contact/Contact'

// Misc imports

class App extends React.Component {
  render() {

    /* React Router DOM { Switch, Router, Rotuer} references */
    /* https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ */
    return (
      <>
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/build-a-pc" exact component={() => <Build />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <span className="dot1"></span>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
