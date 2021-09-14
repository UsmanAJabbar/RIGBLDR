import React from 'react';

import {
  rfLinkGen
} from '../util/utils';


class Proceed extends React.Component {
  constructor(props) {
    super(props);
    // this.selectProductHandler = this.selectProductHandler.bind(this);
    // this.endpoint = `http://ten.elcoz.io:8080/${linkGen(this.props.part).slice(1)}`;
  }

  // fetchData = (thenHandler) => axios.get(this.endpoint).then(thenHandler)

  render () {
    const {
      selectedProductIds,
    } = this.state;
      console.log('yes');

    return (
      <div>
      </div>
    )
  }
}

export default Proceed;
