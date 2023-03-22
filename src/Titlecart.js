import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { AiFillShopping } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";


function ContainerExample({number}) {

  return (
    <Container>
      <Row>
        <Col>
            <p ><Link to= "/" class="alls">All Products</Link>
            <Link to ="/cartlist">
              <button  className='btn shopping-cart-btn'>
                  <AiFillShopping size={24}/>
                  <Badge bg="secondary"  size={4}>{number}</Badge>
                  {/* <Badge bg="secondary"  size={4}>{number===0?null:number}</Badge> */}
              </button>
            </Link>
            <Outlet />
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
