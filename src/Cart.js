import React from 'react';
import './App.js';
import data from './data';
const App = () => {
  {data.productData.map((item,index) =>{
    return(
      <Cart title={item.title} desc={item.desc} price={item.price} key={index}/>
    )
  })}
};
// class pdata extends React.Component{
//   render(){
//     return(
//       <div>
//         <Item id ="1" name=
//       </div>
//     )
//   }
// };
class Cart extends React.Component{
  render(){
    return(
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart;