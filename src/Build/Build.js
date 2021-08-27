import React from 'react';
import ProductRow from './ProductRow';

class Build extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white', padding: '2rem', margin: '2rem', boxShadow: '0.01rem 0.01rem 2rem'}}>
        <table style={{ width: '100%' }}>
          <tr style={{ textAlign: 'left', textTransform: 'uppercase', fontWeight: 900 }}>
            <th>Part</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
          {
            [
              'CPU',
              'Motherboard',
              'HDD/SDD',
              'RAM / Memory',
              'GPU',
              'PSU',
              'Case'
            ].map(category => (
              <ProductRow part={category} />
            ))
          }
        </table>
      </div>
    )
  }
}

export default Build;
