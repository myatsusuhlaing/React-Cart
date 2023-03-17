import React from 'react';
import data from './data';
import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped bordered hover size="sm"> 
      <thead>
        <tr>
          <th>No</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
  
}
// const App = () => {
//   {data.productData.map((item,index) =>{
//     return(
//       <Cart title={item.title} desc={item.desc} price={item.price} key={index}/>
//     )
//   })}
// };

export default StripedRowExample;
// class pdata extends React.Component{
//   render(){
//     return(
//       <div>
//         <Item id ="1" name=
//       </div>
//     )
//   }
// };
// class Cart extends React.Component{
//   render(){
//     return(
//       <div>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Qty</th>
//               <th>Name</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
            
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// export default Cart;