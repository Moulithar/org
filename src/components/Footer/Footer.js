import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./assets/styles/index.css"

const Footer = () =>
{
    return (
      <>
       <div className ="footer p-3">
        <Container>
        <Row>
       <Col xs={12} lg={3} md={3} className="text-center">
       organicfarms@copyrights2023
       </Col>
       <Col xs={12} lg={3} md={3} className="text-center">
    Thank You
       </Col>

       <Col xs={12} lg={3} md={3} className="d-flex gap-5 justify-content-center">
        FAQ TERMS PRIVACY

       </Col>
       <Col xs={12} lg={3} md={3} className="text-center">
        Settings

       </Col>

        </Row>
        </Container>
       
       </div>
       </>
      
    );
}
export default Footer