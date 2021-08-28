import React from 'react';

import Button from '../assets/Button';

import './ProductRow.css';

class ProductRow extends React.Component {

  render () {
    const {
      part,
      name,
      price,
    } = this.props;
    const buttonText = (!!name) ? 'EDIT' : 'ADD';
    return (
      <tr className="product-row">
        <td className="pr-part">{part}</td>
        <td className="pr-name">{name || `:( you haven't chosen a ${part} yet, click the ADD button`}</td>
        <td className="pr-price">{price}</td>
        <td className="pr-button">
          <Button
            overrides={{ text: { fontWeight: 600, textTransform: 'uppercase' } }}
          >
            {buttonText}
          </Button>
        </td>
      </tr>
    )

  }
}

export default ProductRow;
