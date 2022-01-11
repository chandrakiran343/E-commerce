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
    <span className="heading-style">BookStore
    <input onChange={(e)=>{setSearch(e.target.value)}} style={{fontSize:"20px",fontFamily:'sans-serif',marginLeft:'200px',marginRight:'10px',borderColor:'purple'}} type="text"/>
    <button type='submit' onClick={()=>{handleSearch()}} className="btn btn-success"><i class="fas fa-search"></i></button>
    </span>
    <nav id='navi' className="nav-style">
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-primary"><span className="navbtn-style">Home</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info" ><span className="navbtn-style">About Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info"><span className="navbtn-style">Contact Us</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info"><span className="navbtn-style">Menu</span></button>
    <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-success"><span className="navbtn-style">Order History</span></button>
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