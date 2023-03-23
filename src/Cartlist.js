import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import Counter from './counter';
import data from './data';
import Titlecart from './Titlecart';

function StripedRowExample()  {
  const [isItem,noItem] = useState(false);
  return (
    <>
    <Titlecart/>
    {isItem ? 
    <Table className='cartlist-tb' striped hover size="sm">
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
  </Table>:<div className='noitems'> No Item Choose </div>}
    </>
  );  
}
export default StripedRowExample;