import React from 'react';

import ContentBox from '../assets/ContentBox';
import {
  linkGen
} from '../util/utils';
import FilterRow from './FilterRow';

import axios from 'axios';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getRows = this.getRows.bind(this);

    this.endpoint = `http://ten.elcoz.io:8080/${linkGen(this.props.part).slice(1)}`;

    this.state = {
      headers: [],
      products: []
    }

  }

  fetchData = (thenHandler) => axios.get(this.endpoint).then(thenHandler)

  getColumns () {
    this.fetchData(
      data => !!data.data
        ? this.setState({ headers: Object.keys(data.data[0]) })
        : this.setState({ headers: [] })
    )
  }
  getRows () {
    this.fetchData(
      data => !!data.data
      ? this.setState({ products: data.data })
      : this.setState({ products: [] })
    )
  }

  componentDidMount () {
    this.getColumns();
    this.getRows();
  }

  render () {
    const {
      headers,
      products
    } = this.state;

    return (
      <ContentBox overrides={{ display: 'flex' }}>
        <div className="filter-sidebar" style={{width: '30%'}}></div>
        <div className="filter-products" style={{width: '70%'}}>
          <table style={{width: '100%'}}>
            <thead>
              <tr>
                <th>Part (Name)</th>
                <th>Price</th>
                <th>Add/Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product, index) =>
                  <FilterRow
                    row={product}
                    key={index}
                  />
                )
              }
            </tbody>
          </table>
        </div>
      </ContentBox>
    )
  }
}

export default Filter;
