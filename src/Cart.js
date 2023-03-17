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
class Cart extends React.Component{
  render(){
    return(
      <div>
        fndsnfds
      </div>
    )
  }
}

export default Cart;