import React from 'react';
import './imageSlider.css';

const imageSlider = () => {
    
    function open(src){
        window.open(src,'_blank').focus();

    }

    const imageArray = ['https://kbimages1-a.akamaihd.net/a905ae89-1a86-4d04-b6fc-b91d08405d78/1200/1200/False/martial-peak-vol-1.jpg','https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493321941l/34999563.jpg','https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg','https://1.bp.blogspot.com/-cej3QQg3YnM/X7kQb_4zZqI/AAAAAAABEj0/j1S2ujzz0AkBBv7kNezGCVjUnZPSP6QqgCLcBGAsYHQ/s1600/2%2B-%2BTales%2Bof%2Bdemons%2Band%2Bgods%2BChapter%2B302.jpeg','https://upload.wikimedia.org/wikipedia/en/7/7d/Tower_of_God_Volume_1_Cover.jpg','https://images-na.ssl-images-amazon.com/images/I/81ZAC67DE1S.jpg']
    
    
    return (<div className="slider-container">
        <div id='slider' className="card-holder">
        <figure>
        {imageArray.map(i=>{return (<span><img id='p5' src={i} onClick={(i)=>open(i)} className='img-style' alt='yoking'  ></img></span>)})}
</figure>  
        

    </div>
    
        </div>);
}
 
export default imageSlider;