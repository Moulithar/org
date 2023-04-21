import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images6 from './assets/styles/images6.jpeg';
import images7 from './assets/styles/images7.jpg';
import images9 from './assets/styles/images9.jpg';
import images8 from './assets/styles/images8.jpeg';
import images100 from './assets/styles/images100.jpg';
import "./assets/styles/index.css";

const About = () => { 
    return ( 
        <>
        <Container>
            <div className="about">
            <h1 className="p-5">Our Products</h1>
            <Row className="text-center">
                <Col xs={12} md={6} lg={3} >
                    <img className ="imagesmall" src={images8} alt="" />
                    <p><strong>Blueberry $2.50</strong></p>
                     <img className ="imagesmall" src={images9} alt="" />
                        <p><strong>Strawberry $3.00</strong></p>
                </Col>
                 <Col xs={12} md={6} lg={3}>
                    <img className ="imagesmall" src={images6} alt="" />
                    <p><strong>Jackfruit $1.50</strong></p>
                    <img className ="imagesmall" src={images7} alt="" />
                    <p><strong>Oranges $4.00</strong></p>
                </Col>
                <Col xs={12} md={12} lg={6}><img className ="imagemain" src={images100} alt="" /></Col>
                <span>
                <p>fresh</p>
                <h3>fruits</h3>
                </span>
            </Row>
            </div>
         
        </Container>
        </>
    );}

    export default About