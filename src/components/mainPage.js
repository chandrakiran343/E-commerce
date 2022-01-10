import React from 'react';
import './mainPage.css'
import ImageSlider from './imageSlider'

const mainPage = () => {

    return (<div className="container-style">
    <hr className="hr-style"></hr>
    <span className="heading-style"><span>BookStore</span></span>
    <hr className="hr-style"></hr>
    <nav id='navi' className="nav-style">
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-primary"><span className="navbtn-style">Home</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info" ><span className="navbtn-style">About Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-fas fa-"><span className="navbtn-style">Contact Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-fas fa-"><span className="navbtn-style">Menu</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-success"><span className="navbtn-style">Order History</span></button>
    </nav>
    <hr className="hr-style"></hr>
    <ImageSlider />
    
        </div>);
}
 
export default mainPage;