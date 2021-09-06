import React from 'react';
import ContentBox from '../assets/ContentBox';
import { linkGen, awaitfetchData } from '../util/utils';

class Filter extends React.Component {
  render () {
    const {
      part
    } = this.props;

    const data = fetchData(`http://ten.elcoz.io:8080/${linkGen(part).slice(1)}`)
		.then(res => {
      console.log('Data returned to Filter component from axios == ', res)
    });

    return (
      <ContentBox>
        <div className="filter-sidebar"></div>
        <div className="filter-products">
          <table>
            <thead>
              <tr>
                {
                  Object.keys(data).map(column => (
                    <th>{column}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {/* {
                resp.map(row =>
                  // <FilterRow row={row} columns={acceptable_columns} />
                )
              } */}
            </tbody>
          </table>
        </div>
      </ContentBox>
    )
  }
}

export default Filter;
