import React from 'react';
import './imageSlider.css';

const imageSlider = () => {
    
    function open(src){
        window.open(src,'_blank').focus();
    }

    const imageArray = ['http://img.timeinc.net/time/magazine/archive/covers/2000/1101000619_400.jpg','https://images-na.ssl-images-amazon.com/images/I/51FooYXn34L.jpg','https://cdna.artstation.com/p/assets/images/images/009/360/872/large/luca-lonardi-cover-it-nologo.jpg?1518543299&dl=1','https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552940591l/2574278._SY475_.jpg','https://upload.wikimedia.org/wikipedia/en/7/7d/Tower_of_God_Volume_1_Cover.jpg','https://images-na.ssl-images-amazon.com/images/I/91vj7Wi8WsL.jpg','https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/242/9789332571242.jpg']
    
    
    return (<div className="slider-container">
                <div id='slider' className="card-holder">
                    <figure>
                        {imageArray.map(i=>{return (<span><img id='p5' src={i} onClick={(i)=>open(i)} className='img-style' alt='yoking'  ></img></span>)})}
                    </figure>  
                </div>
            </div>);
}
 
export default imageSlider;