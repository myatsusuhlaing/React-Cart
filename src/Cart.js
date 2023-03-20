import React from 'react';
import Table from 'react-bootstrap/Table';
import { AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai";
import Button from 'react-bootstrap/Button';
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
            <Button variant="secondary" size ="sm">
              <AiOutlinePlus size={15} />
            </Button>
            <span>{}</span>
            <Button variant="secondary" size ="sm">
              <AiOutlineMinus size={15} />
            </Button>
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