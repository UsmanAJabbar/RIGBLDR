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
import Contact from '../Contact/Contact';
import Section from '../sections/section';

// Misc imports

class App extends React.Component {
  render() {
    return (
    <Router>

      {/* Menu */}
      <Section
        sectionId="nav-section"
        containerId="nav-container"
        overrides={{ container: { height: 'fit-content' } }}
      >
        <Menu />
      </Section>

      {/* Sections */}
      <Section>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/build-a-pc" exact component={() => <Build />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Section>

    </Router>
    );
  }
}

export default App;
