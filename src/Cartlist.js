import React from 'react';
import Table from 'react-bootstrap/Table';
import Counter from './counter';
import data from './data';


function StripedRowExample()  {
  
  return (
    <Table striped hover size="sm"> 
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        {data.productData.map((d) => <>
          <tr>
          <td>{d.title}</td>
          <td>{d.price}</td>
          <td>
            <Counter/>
          </td>
        </tr>
        </>
        )
        }
      </tbody>
    </Table>

  ); 
  
}
export default StripedRowExample;