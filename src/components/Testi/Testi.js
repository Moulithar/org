import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import images1 from './assets/styles/images1.jpeg';
import images8 from './assets/styles/images8.jpeg';
import images9 from './assets/styles/images9.jpeg';
import Card from 'react-bootstrap/Card';
import "./assets/styles/index.css";
const Testi = () =>{
    return(
        <>
        <div className="testi text-center">
            <h1 className="pt-5">what people say</h1>
            <div className ="pad">
              <Carousel>
                <Carousel.Item>
                  <img
                    className=" testimage "
                    src={images1}
                    alt="First slide"
                  />
                  <Card className="card1">
                    <Card.Body className="sayings">
                  <Card.Text className="quote">
                  <h5>KEN MILES</h5>
                  <p className="" >Agri Officer</p>
                  <span>  " I have bought a head of lettuce from your store this morning and it was so delicious and tasty .
                      It is one the most healthiest piece of vegetables we ever head. It is also so nutitious and fresh."
                  </span>
                  </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className=" testimage "
                     src={images8}
                     alt="First slide"
                    />
                    <Card className="card1">
                      <Card.Body className="sayings">
                        <Card.Text className="quote">
                          <h5>JEFF GOLDBUM</h5>
                          <p className="">Market Member</p>
                          <span>"I have bought a head of lettuce from your store this morning and it was so delicious and tasty .
                                  It is one the most healthiest piece of vegetables we ever head. It is also so nutitious and fresh."
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                      <img
                       className=" testimage "
                       src={images9}
                       alt="First slide"
                      />
                    <Card className="card1">
                      <Card.Body className="sayings">
                        <Card.Text className="quote">
                          <h5><strong>EVA TORRES</strong></h5>
                          <p className="">Regular Client</p>
                          <span> " I have bought a head of lettuce from your store this morning and it was so delicious and tasty .
                                   It is one the most healthiest piece of vegetables we ever head. It is also so nutitious and fresh."
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Carousel.Item>
              </Carousel>
            </div>
        </div>
        </>
  );
}
export default Testi