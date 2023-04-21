import React from "react";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import images6 from "./assets/styles/images6.jpg"
import "./assets/styles/index.css"
 const We = () =>
 {
    return (
        <Container className="p-5">
            <Row>
            <h1 className="p-3">About</h1>
                <Col md={12} lg={6} className="p-3">
                    <img src ={images6} className="weimg" alt="" />
                </Col>
                <Col md={12} lg={6} className="text-center pt-5">
                        <p> We are certified by FSSAI all oru the coounty. We are one of the leading oiraginc farming 
                        community in the whole world. we like to produce chgemical free ,nutruoiuss crops.
                        We are all oru the coounty. We are one of the leading oiraginc farming
                        We are certified by  all oru the coounty. We are one of the leading oiraginc farming community
                        in the whole world. we like to produce chgemical free ,nutruoiuss crops.
                        </p>
                </Col>
            </Row>
        </Container>
    );
 }
 export default We