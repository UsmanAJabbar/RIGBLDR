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
import Filter from '../Filter/Filter';
import AppContext from './AppContext';

// Misc imports
import { linkGen } from '../util/utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: { ...selectedParts }
    };

    this.pages = {
      'Home': <Home />,
      'Build': <Build selectedProducts={this.state.selected} />,
      'Contact': <Contact />
    };

    this.buildSelectProduct = this.buildSelectProduct.bind(this);
    this.pageRoutes = Object.entries(this.pages).map(([navText, ReactComponent], index) => {
      const navLink = linkGen(navText);
      const tag = navLink.slice(1) || 'home';
      return (
        <Route
          key={index}
          path={navLink}
          exact
          component={() => (
            <Section sectionId={`${tag}-section`} containerId={`${tag}-container`}>
              {ReactComponent}
            </Section>
          )}
        />
      )
    });
    this.partRoutes = Object.keys(selectedParts).map((part, index) => {
      const navLink = '/filter' + linkGen(part);
      const tag = linkGen(part).slice(1);
      return (
        <Route
          key={index + Object.keys(this.pages).length}
          path={navLink}
          exact
          component={() => (
            <Section sectionId={`${tag}-section`} containerId={`${tag}-container`}>
              <Filter
                part={part}
                buildSelectProduct={this.buildSelectProduct}
              />
            </Section>
          )}
        />
      )
    });
  }

  buildSelectProduct (key, product) {
    this.setState({
      selected: {
        ...this.state.selected,
        [key]: product
      }
    })
  }

  render() {
    return (
      <Router>

        {/* Menu */}
        <Section
          sectionId="nav-section"
          containerId="nav-container"
          overrides={{ container: { height: 'fit-content', padding: '1.5rem 0' } }}
        >
          <Menu menuItems={Object.keys(this.pages)}/>
        </Section>

        {/* Sections */}
        <AppContext.Provider value={this.state}>
          <Switch>
            { [ ...this.pageRoutes, ...this.partRoutes ] }
          </Switch>
        </AppContext.Provider>
      </Router>
    );
  }
}

const selectedParts = {
  CPU: {},
  Mobo: {},
  SSD: {},
  RAM: {},
  GPU: {},
  PSU: {},
  Case: {}
};

export default App;
