import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./assets/style/index.css";

const Counter = () => { 
    return ( 
    <>
      <div className="counter text-centre">
      <Container>
        <Row>
        <Col lg={3} md={3}>
                <Card>
                    <Card.Body className="text-center">
                        <strong>FARMERS</strong>
                        <Card.Text className="text-center">
                           128
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col  lg={3} md={3}>
                <Card>
                    <Card.Body className="text-center">
                        <strong>HAPPY CLIENTS</strong>
                        <Card.Text>
                           2653
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col><Col  lg={3} md={3}>
                <Card>
                    <Card.Body className="text-center">
                        <strong>AWARDS</strong>
                        <Card.Text>
                           12
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col  lg={3} md={3}>
                <Card>
                    <Card.Body className="text-center">
                        <strong>PRODUCTS</strong>
                        <Card.Text>
                           72
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
        </Container>
       </div>
    </>   
    ); 
      
}
    export default Counter