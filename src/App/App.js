import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Menu from '../sections/menu';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {
      /* Add props here */
    } =this.props;

    /* React Router DOM { Switch, Router, Rotuer} references */
    /* https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ */
    return (
      <>
        <Router>
          <Menu />
          <Switch>
            <Route path='/' exact component={() => <Home />} />
            <Route path='/build-a-pc' exact component={() => <BuildAPC />} />
            <Route path='/pc-filters' exact component={() => <PCFilter />} />
            <Route path='/contact' exact component={() => <ContactUs />} />
          </Switch>
        </Router>
      </>
    );

  }
}

export default App;
