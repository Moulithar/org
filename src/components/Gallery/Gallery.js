import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images1 from "./assets/styles/images1.jpeg";
import images2 from "./assets/styles/images2.jpeg";
import images3 from "./assets/styles/images3.jpeg";
import images4 from "./assets/styles/images4.jpeg";
import images5 from "./assets/styles/images5.jpeg";
import images6 from "./assets/styles/images6.jpeg";
import "./assets/styles/index.css";

const Gallery = () =>
{
    return (
        <>
        <Container>
            <h1>Gallery</h1>
        <Row className="p-5">

        <Col xs={12} md={6} lg={4}>      
            <div className="tab2">
                <img src={images1} alt="Avatar" className="gallery2" />
                    <div className="overlay2">Grapes</div>
            </div>
        </Col>
 
        <Col xs={12} md={6} lg={4}>      
            <div className="tab2">
                <img src={images2} alt="Avatar" className="gallery2" />
                    <div className="overlay2">Blueberry</div>
            </div>
        </Col> 
            <Col xs={12} md={6} lg={4}>
                
            <div className="tab2">
            <img src={images3} alt="Avatar" className="gallery2" />
                <div className="overlay2">Strawberry</div>
        </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
                
            <div className="tab2">
            <img src={images4} alt="Avatar" className="gallery2" />
                <div className="overlay2">Oranges</div>
        </div>
            </Col>
           
            <Col xs={12} md={6} lg={4}>
            <div className="tab2">
            <img src={images5} alt="Avatar" className="gallery2" />
                <div className="overlay2">Green Apples</div>
        </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
                
            <div className="tab2">
            <img src={images6} alt="Avatar" className="gallery2" />
                <div className="overlay2">Dragon Fruit</div>
        </div>
            </Col>
         </Row>
        </Container>
      
      </>
       
    );
}
export default Gallery