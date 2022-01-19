import React from 'react';
import './imageSlider.css';
import Carousel from 'react-bootstrap/Carousel'
import { useLocation,useNavigate } from 'react-router-dom';


// Important Notice: npm install react-bootstrap bootstrap -----> This should be installed into the app folder
// import Carousel from 'react-bootstrap/Carousel'    ------> To use the Carousel(imageslider) component in a screen 


const ImageSlider = (
    {duration,fade=false,variant,alt,images}
) => {

    const navigate = useNavigate();
    
    const imageArray = images.documents.map(e=>{ return({CoverURL:e.CoverURL})})
    console.log(images.documents)

    let covers = []
    for(let i = 0;i<10;i++){
        covers.push({src1:imageArray[Math.floor(Math.random() * (59- 0) ) + 0].CoverURL,src2:imageArray[Math.floor(Math.random() * (59- 0) ) + 0].CoverURL})
    }
    const handleClick = (src)=>{
        navigate(`/book/${src[10]+src[15]}/`,{ state: images.documents.filter(e=>e.CoverURL===src) })
    }
    
    return (<div className="slider-container">
                <Carousel variant={variant} fade={fade}>
                    {covers.map(i=>{return( 
                        <Carousel.Item interval={duration}>
                        <div className="double-frame">
                            <span onClick={()=>{handleClick(i.src1)}} className="image-container"><img className="image-style" src={i.src1} alt='lel' /></span>
                            <span onClick={()=>{handleClick(i.src2)}} className="image-container"><img className="image-style" src={i.src2}  alt='lel' /></span>
                        </div>
                    </Carousel.Item>
                    )})}
                </Carousel>
            </div>);
}
 
export default ImageSlider;