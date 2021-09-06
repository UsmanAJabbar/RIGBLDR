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

    this.endpoint = `http://ten.elcoz.io:8080/${linkGen(this.props.part).slice(1)}`;

    this.state = {
      columns: [],
      rows: []
    }

  }

  fetchData = (thenHandler) => axios.get(this.endpoint).then(thenHandler)

  getColumns () {
    return this.fetchData(
      data => !!data.data
        ? this.setState({
            columns: Object.keys(data.data[0]).map(column => <th>{column}</th>)
          }, () => console.log(
            'columns ==', this.state.columns
          ))
        : this.setState({
            columns: []
          })
    )
  }
  getRows () {
    this.fetchData(
      data => !!data.data
      ? this.setState({
          rows: data.data
        }, () => console.log(
          'rows ==', this.state.rows
        ))
      : this.setState({
          rows: []
        })
    )
  }

  componentDidMount () {
    this.getColumns();
    this.getRows();
  }

  render () {
    return (
      <ContentBox>
        <div className="filter-sidebar" style={{width: '30%'}}></div>
        <div className="filter-products" style={{width: '70%'}}>
          <table>
            <thead>
              <tr>
                {
                  this.state.columns
                }
              </tr>
            </thead>
            <tbody>
              {
                this.state.rows.map((productRow, index) =>
                  <FilterRow row={productRow} key={index} />
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
