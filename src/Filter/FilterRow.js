import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../assets/Button';

class FilterRow extends React.Component {
  render () {
    const {
      row
    } = this.props;

    return (
      <tr className="filter-row">
        <td>{row.part || row.model}</td>
        <td>{row.vendor_endpoint.price}</td>
        <td>
          <Link to={'/build'}>
            <Button
              overrides={{ text: { fontWeight: 600, textTransform: 'uppercase' } }}
            >
              Add/Edit
            </Button>
          </Link>
        </td>
      </tr>
    )
  }
}

export default FilterRow;
