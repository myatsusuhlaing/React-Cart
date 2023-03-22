
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState } from 'react';
// import Cartlist from './Cartlist';
import Titlecart from './Titlecart';
import AddToCart from './AddToCartBtn';
import data from './data';
import Counter from './counter';


function GroupExample () {

// const [count, setCount] = useState(0)
const [number,setNumber] =useState(0);
  return (
    <div class="App">
    <Titlecart number={number}/>
      <CardGroup >
        {
          data.productData.map((d)=><>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Card.Body>
            <Card.Title>{d.title}</Card.Title>
          <Card.Text>
            {d.price}
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <AddToCart number={number} setNumber={setNumber}/> <Counter/>
            {/* <Counter count={count} setCount={setCount} /> */}
          </Card.Footer>
          </Card></>)
        }
      </CardGroup>
    {/* <Cartlist/> */}
    </div>  
  );
}
export default GroupExample;