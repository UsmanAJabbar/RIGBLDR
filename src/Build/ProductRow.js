import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../assets/Button';
import { linkGen } from '../util/utils';

import './ProductRow.css';

class ProductRow extends React.Component {

  render () {
    const {
      part,
      productRow,
    } = this.props;

    return (
      <tr className="product-row">
        <td className="pr-part">{part}</td>
        <td className="pr-name">{productRow.model || `:( you haven't chosen a ${part} yet, click the ADD button`}</td>
        <td className="pr-price">{productRow?.vendor_endpoint?.price}</td>
        <td className="pr-button">
          <Link to={`/filter${linkGen(part)}`} part={part}>
            <Button overrides={{ text: { fontWeight: 600, textTransform: 'uppercase' } }}>
              {(!!productRow?.model) ? 'EDIT' : 'ADD'}
            </Button>
          </Link>
        </td>
      </tr>
    )

  }
}

export default ProductRow;
