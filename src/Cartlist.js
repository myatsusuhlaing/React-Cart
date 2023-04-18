import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import Counter from './counter';
import data from './data';
import Titlecart from './Titlecart';
import { CardContext } from './content/CartContent';

function StripedRowExample()  {
  // const [cartData] = useContext(CardContext);
  const isCardData = this.state.isCardData;
  return (
    <>
    <Titlecart/>
    {isCardData ?
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
  </Table> : <div className='noitems'>No Items</div>}
    </>
  );  
}
export default StripedRowExample;