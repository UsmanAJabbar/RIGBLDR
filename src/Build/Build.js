import React from 'react';

import ProductRow from './ProductRow';
import ContentBox from '../assets/ContentBox';
import Button from '../assets/Button';

import './Build.css';

class Build extends React.Component {
  render() {
    return (
      <ContentBox>
        <table id="build" style={{ width: '100%' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <Button overrides={{ text: { textTransform: 'uppercase', fontWeight: 700 }}}>Proceed</Button>
        </div>
      </ContentBox>
    )
  }
}

export default Build;
