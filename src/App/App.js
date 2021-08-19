// Import modules 
import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Import React components
import Menu from '../sections/menu';

// Misc imports
import {
  linkGen
} from '../util/utils';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {
      /* Add props here */
    } = this.props;

    /* React Router DOM { Switch, Router, Rotuer} references */
    /* https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ */
    return (
      <>
        <Router>
          <Menu />
          <Switch>
            {
              Object.entries(navRouters).map(
                ([navText, Component]) =>
                  <Route path={(navText === 'Home') ? '/' : linkGen(navText)} exact component={() => <Component />} />
              )
            }
          </Switch>
        </Router>
      </>
    );

  }
}

const navRouters = {
  'Home': <Home />,
  'Build PC': <Build />,
  'PC Filters': <PCFilter />,
  'Contact': <Contact />
}

export default App;
