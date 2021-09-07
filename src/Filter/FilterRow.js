import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../assets/Button';

const FilterRow = (props) => {
  const {
    row,
    selectProductHandler
  } = props;

  const history = useHistory();

  return (
    <tr className="filter-row">
      <td>{row.part || row.model}</td>
      <td>{row.vendor_endpoint.price}</td>
      <td onClick={() => selectProductHandler(row, () => history.push('/build'))}>
        <Button overrides={{ text: { fontWeight: 600, textTransform: 'uppercase' } }}>
          Add
        </Button>
      </td>
    </tr>
  )
}

export default FilterRow;
