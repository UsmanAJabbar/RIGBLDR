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
import { linkGen } from '../util/utils';

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
        <Menu menuItems={Object.keys(pages)}/>
      </Section>

      {/* Sections */}
      <Switch>
        {
          Object.entries(pages).map(([navText, ReactComponent], index) => (
            <Route
              key={index}
              path={linkGen(navText)}
              exact
              component={() => (
                <Section>
                  {ReactComponent}
                </Section>
              )}
            />
          ))
        }
      </Switch>

    </Router>
    );
  }
}

const pages = {
  'Home': <Home />,
  'Build': <Build />,
  'Contact': <Contact />
}

export default App;
