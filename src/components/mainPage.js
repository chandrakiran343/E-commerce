import React from 'react';
import './mainPage.css'

const mainPage = () => {

    return (<div className="">
    <hr className="hr-style"></hr>
    <span className="heading-style"><span>BookStore</span></span>
    <hr className="hr-style"></hr>
    <nav className="nav-style">
    <button className="btn btn-fas fa-"><span className="navbtn-style">Home</span></button>
    <button className="btn btn-fas fa-"><span className="navbtn-style">About Us</span></button>
    <button className="btn btn-fas fa-"><span className="navbtn-style">Contact Us</span></button>
    <button className="btn btn-fas fa-"><span className="navbtn-style">Menu</span></button>
    <button className="btn btn-fas fa-"><span className="navbtn-style">Order History</span></button>
    </nav>
    <hr className="hr-style"></hr>
        
        </div>);
}
 
export default mainPage;