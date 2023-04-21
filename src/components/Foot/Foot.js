import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./assets/styles/index.css";


const Foot =()=>{
    return (
        <>
        <div className="foot">
        <Container >
        <Row>
            <Col  md={6} lg={4}>
            <h5 className="text-center p-3">CONTACT</h5>
                <InputGroup className="mb-3 p-2 d-flex gap-5" >
                        <Form.Control  placeholder="Your Name" aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3 p-2 d-flex gap-5" >
                        <Form.Control placeholder="Your Mail" aria-label="First name" />
                </InputGroup>

            </Col>
            <Col  md={6} lg={4} className="text-center">
            <h5 className="text-center p-3">ADDRESS</h5>
                <p>352,North School Street</p>
                <p>Bhavani road</p>
                <p>Perundurai-638052</p>
            </Col>
            <Col  md={12} lg={4} className="text-center">
            <h5 className= "p-3">SOCIAL MEDIA</h5>
                <p className="d-flex gap-5 justify-content-center">Facebook</p>
                <p className="d-flex gap-5 justify-content-center">Instagram</p>
                <p className="d-flex gap-5 justify-content-center">Linkedin</p>
            </Col>
        </Row>
        </Container>
        </div>
       
        </>
     
      );

}
    

export default Foot;