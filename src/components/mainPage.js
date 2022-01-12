import React, { useState } from 'react';
import './mainPage.css'
import ImageSlider from './imageSlider'
import Card from './card.js'


const MainPage = () => {

    const [search,setSearch] = useState('')

    const handleSearch = () => {
        console.log(search)
    }

    
    return (<div className="container-style">
    <hr className="hr-style"></hr>  
    <div className="header">
    <span className="heading-style">BookStore</span>
    <span  id='space'>
    <input  onChange={(e)=>{setSearch(e.target.value)}} style={{fontSize:"20px",fontFamily:'sans-serif',marginLeft:'200px',marginRight:'10px',borderColor:'black'}} type="text"/>
    <button type='submit' onClick={()=>{handleSearch()}} className="btn btn-primary"><i class="bi bi-search">   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></i></button>
    </span>
 
    <nav id='navi' className="nav-style">
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Home</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">About Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Contact Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Menu</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Order History</span></button>
    </nav>
    </div>
    <hr className="hr-style"></hr>
    <div className="body">
    <ImageSlider />
    <div className='card-container'>
        <Card text='hello' imgurl="https://tibs2.threeifbyspace.net/wp-content/uploads/2020/05/visual.jpg" />
        <Card text='hello' imgurl="https://tibs2.threeifbyspace.net/wp-content/uploads/2020/05/visual.jpg" />
        <Card text='hello' imgurl="https://tibs2.threeifbyspace.net/wp-content/uploads/2020/05/visual.jpg" />

    </div></div>
        </div>);
}
 
export default MainPage;