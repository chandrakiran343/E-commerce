import React from 'react';
import './mainPage.css'
import ImageSlider from './imageSlider'
import CategoryList from './CategoryList'
import Card from './card.js'
import Header from './header';

const MainPage = () => { 
        return (<div className="container-style">
        <hr className="hr-style"></hr>  
        <Header/>
        <hr className="hr-style"></hr>
        <div className="upper-body">
        <CategoryList />
        <div className="body">
        <span style={{fontSize:'30px',fontWeight:'bolder',marginLeft:'10vh'}}>Popular Picks</span>
            <hr />
            <div className="slider-container">
                
                <ImageSlider variant='dark' />

            </div>
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
        </div>
        </div>);
}
 
export default MainPage;