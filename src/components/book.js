import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Spinner from './spinner.js';
import {setOrder} from '../firebase'
import { useLocation,useNavigate } from 'react-router-dom';
import './book.css'



const Book = () => {


    const location = useLocation();

    console.log(location.state[0].Name)

    const handleKart = async (book)=>{
        book.Quantity = 1;
        // console.log(book)
        await setOrder(book)
        console.log(666)
    }

    return (<div className="book-screen-style">
        <Header heading={false} docs={location.state} />
        <div className="book-desc-container">
        <span className="book-image-container">
            <img className="book-image-style" src={location.state[0].CoverURL} alt='lel' />
            <span style={{fontWeight:400}}>Published: {location.state[0].Published}</span>
            <span style={{fontWeight:400}}>Rating: {location.state[0].Rating}</span>
            <button onClick={()=>handleKart(location.state[0])} className="addkart-style">Add to Kart</button>
        </span>
        <span className="book-desc-style">
            <span className="book-heading-style">{location.state[0].Name}</span>
            <span>{location.state[0].Author}</span>
            <span className='book-price-style'>₹{location.state[0].Price}</span>
            <hr style={{width: '100%'}} />
            <span className="book-desc">
            {location.state[0].Summary}
            </span>
            <hr style={{width: '100%'}} />
        </span>  
        <span className={location.state[0].Stock?'badge bg-info':'badge bg-danger'}>{location.state[0].Stock?'Instock':'Out of Stock'}</span>
        </div>
        </div>);
}
 
export default Book;