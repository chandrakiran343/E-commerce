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
            <span className="heading-style">Book Store
            </span>
            <div className="search-style">
                <input onChange={(e)=>{setSearch(e.target.value)}} style={{fontSize:"20px",fontFamily:'sans-serif',marginRight:'10px',borderColor:'purple',textAlign:'center'}} type="text"/>
                    <button type='submit' onClick={()=>{handleSearch()}} className="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
            </div>
            <nav id='navi' className="nav-style">
                <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-primary"><span className="navbtn-style">Home</span></button>
                <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info" ><span className="navbtn-style">About Us</span></button>
                <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-info"><span className="navbtn-style">Menu</span></button>
                <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-success"><span className="navbtn-style">Order History</span></button>
            </nav>
        </div>
        <hr className="hr-style"></hr>
        <div className="body">
            <span style={{fontSize:'30px',fontWeight:'bolder',left:'0px',position:'absolute',marginLeft:'10vh'}}>Popular Picks</span>
            <hr />
            <ImageSlider />
            <div className="spotlight-style"><span className="banner-style">Series SpotLight: </span>
                <hr />
                <span className="series-name">The Lord of the Rings</span>
                <span style={{marginLeft:'20vh',fontWeight:'bold'}}>-By J.R.R TOLKIEN</span>
                <div className='card-container'>
                    <Card text='NOW 41% OFF' imgurl="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637331669-51tW-UJVfHL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" />
                    <Card text='NOW 34% OFF' imgurl="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637331747-51zwIlXzbSL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" />
                    <Card text='NOW 29% OFF' imgurl="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637331794-51MlPWDaXGL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" />
                    <Card text='NOW 24% OFF' imgurl="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637331538-41IiYBJBEHL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" />
                </div>
            </div>
        </div>
        </div>);
}
 
export default MainPage;