import React from 'react';

import ProductRow from './ProductRow';
import ContentBox from '../assets/ContentBox';
import Button from '../assets/Button';

import './Build.css';

class Build extends React.Component {
  constructor(props) {
    super(props);

    this.selectProduct = this.selectProduct.bind(this);
  }

  selectProduct (key, product) {
    this.setState({
      selected: {
        ...this.state.selected,
        [key]: product
      }
    }, () => console.log('Build JS state', this.state))
  }

  render() {
    const {
      selectedProducts
    } = this.props;

    console.log('Yeet', selectedProducts, this.state)
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
              Object.entries(selectedProducts).map(([category, productRow], index)=> (
                <ProductRow
                  key={index}
                  part={category}
                  productRow={selectedProducts[category] || productRow}
                  buildSelectHandler={this.selectProduct}
                />
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

const parts = {
  CPU: {},
  Mobo: {},
  SSD: {},
  RAM: {},
  GPU: {},
  PSU: {},
  Case: {}
};

export default Build;
