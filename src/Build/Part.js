import React from 'react'
import './Part.css'

class Part extends React.Component {
  render() {
    return (
      <tr className="pcPart">
        <td>CPU</td>
        <td>AMD RYZEN 5 5600X</td>
        <td>$3</td>
        <td>Edit</td>
      </tr>
    )
  }
}

export default Part;
