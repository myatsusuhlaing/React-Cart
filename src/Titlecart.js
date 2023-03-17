import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
            <p class="alls">All Items</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;


// class Titlecart extends React.Component{
//     render(){
//         return(
//             <div class="alls">
//                 All Items
//             </div>
//         )
//     }
// }
// export default Titlecart;
