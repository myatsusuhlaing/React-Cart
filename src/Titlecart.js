import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { AiFillShopping } from "react-icons/ai";

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
            <p class="alls">All Products
            <button className='btn shopping-cart-btn'>
                <AiFillShopping size={24}/>
                <Badge bg="secondary"  size={4}>9</Badge>
              </button>
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
