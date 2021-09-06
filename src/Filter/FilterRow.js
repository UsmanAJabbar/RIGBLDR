import React from 'react';

class FilterRow extends React.Component {
  render () {
    return (
      <ContentBox>
        <table id="filter" style={{ width: '100%' }}>
          <thead>
            <tr style={{ textAlign: 'left', textTransform: 'uppercase', fontWeight: 900 }}>
              <th>Part</th>
              <th>Name</th>
              <th>Price</th>
              <th>Add/Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              [
                'CPU',
                'Mobo',
                'SSD',
                'RAM',
                'GPU',
                'PSU',
                'Case'
              ].map((category, index)=> (
                <ProductRow part={category} key={index} />
              ))
            }
          </tbody>
        </table>
      </ContentBox>
    )
  }
}

export default FilterRow;
