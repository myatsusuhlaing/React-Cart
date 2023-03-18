
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import Cart from './Cart';
import Titlecart from './Titlecart';

function GroupExample () {

  return (
    <div class="App">
      <Titlecart/>
      <CardGroup >
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>cloth</Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href=""><button>+Add To Cart</button></a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>cloth</Card.Title>
          <Card.Text>
            $50
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href=""><button>+Add To Cart</button></a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>cloth</Card.Title>
          <Card.Text>
           $40
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href=""><button>+Add To Cart</button></a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>cloth</Card.Title>
          <Card.Text>
            $50
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href=""><button>+Add To Cart</button></a>
        </Card.Footer>
      </Card>
    </CardGroup>
    <Cart/>
    </div>  
  );
  
}
export default GroupExample;