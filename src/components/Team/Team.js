import React from "react";
import images1 from './assets/styles/images1.jpg';
import images2 from './assets/styles/images2.jpg';
import images3 from './assets/styles/images3.jpg';
import "./assets/styles/index.css";

const Team = () =>
{
    return (
        <>
            
            <div className="team">
            <h1>Our Team</h1>
            <div className=" d-flex gap-5 justify-content-center">
            <img className ="tm1" src={images1} alt=""/>
            <img src={images2} alt="Avatar" className="tm1" />
            <img className ="tm1" src={images3} alt=""/>
       </div>
            </div>
      
        </>
    )
}
export default Team