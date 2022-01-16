import React from 'react';
import Header from './header';
import './OrderHistory.css'
import Footer from './footer.js'

const OrderHistory = () => {
    return (<div> 
    <div className="container-style">
    <hr className="hr-style"></hr>  
    <Header/>
    <hr className="hr-style"></hr>
    <h1>Order History</h1>
    
    </div>
    <div className='block'>
        <div className='order'>
           <h5>Order Number: 1</h5> 
           <h5>Date: 15/01/2021</h5>
           <h5>Time: 10:05:05</h5>
           <h5>Total Amount: ₹408</h5>
        </div>
        <hr className='hr'></hr>           
        <h3>Items:</h3>
        <div className='order'>
        <span className='image'><img src='https://m.media-amazon.com/images/P/B07F6C99Q7.01._SCLZZZZZZZ_SX500_.jpg' alt='A.P.J Abdul Kalam'></img></span>
        <div className='iblock'>
            <h5 className='ih5'>Name: Wings of Fire</h5>
            <h6> By A. P. J. Abdul Kalam</h6>
            <h5 className='ih5'>Quantity: 1</h5>
            <h5 className='ih5'>Price: ₹279</h5>
        </div>
        </div>
        <hr className='hr'></hr> 
        <div className='order'>
        <span className='image'><img src='https://images-na.ssl-images-amazon.com/images/I/41n1edvVlLL._SX317_BO1,204,203,200_.jpg' alt='Walter Isaacson'></img></span>
        <div className='iblock'>
            <h5 className='ih5'>Name: Steve Jobs: The Exclusive Biography</h5>
            <h6> By Walter Isaacson</h6>
            <h5 className='ih5'>Quantity: 1</h5>
            <h5 className='ih5'>Price: ₹129</h5>
        </div>
        </div>
        </div>
        <div className='block'>
        <div className='order'>
           <h5>Order Number: 2</h5> 
           <h5>Date: 16/01/2021</h5>
           <h5>Time: 1:05:05</h5>
           <h5>Total Amount: ₹408</h5>
        </div>
        <hr className='hr'></hr>           
        <h3>Items:</h3>
        <div className='order'>
        <span className='image'><img src='https://m.media-amazon.com/images/P/B07F6C99Q7.01._SCLZZZZZZZ_SX500_.jpg' alt='A.P.J Abdul Kalam'></img></span>
        <div className='iblock'>
            <h5 className='ih5'>Name: Wings of Fire</h5>
            <h6> By A. P. J. Abdul Kalam</h6>
            <h5 className='ih5'>Quantity: 1</h5>
            <h5 className='ih5'>Price: ₹279</h5>
        </div>
        </div>
        <hr className='hr'></hr> 
        <div className='order'>
        <span className='image'><img src='https://images-na.ssl-images-amazon.com/images/I/41n1edvVlLL._SX317_BO1,204,203,200_.jpg' alt='Walter Isaacson'></img></span>
        <div className='iblock'>
            <h5 className='ih5'>Name: Steve Jobs: The Exclusive Biography</h5>
            <h6> By Walter Isaacson</h6>
            <h5 className='ih5'>Quantity: 1</h5>
            <h5 className='ih5'>Price: ₹129</h5>
        </div>
        </div>
        </div>
        <Footer />
   </div>
    );
}
 
export default OrderHistory;
