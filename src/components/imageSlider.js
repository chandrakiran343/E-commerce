import React from 'react';
import './imageSlider.css';
import Carousel from 'react-bootstrap/Carousel'

// Important Notice: npm install react-bootstrap bootstrap -----> This should be installed into the app folder
// import Carousel from 'react-bootstrap/Carousel'    ------> To use the Carousel(imageslider) component in a screen 


const imageSlider = (
    {duration,fade=false,variant,alt}
) => {
    
    const imageArray = [{src1:'http://img.timeinc.net/time/magazine/archive/covers/2000/1101000619_400.jpg',alt1:'future',src2:'https://images-na.ssl-images-amazon.com/images/I/51FooYXn34L.jpg',alt2:'CO'},
    {src1:'https://cdna.artstation.com/p/assets/images/images/009/360/872/large/luca-lonardi-cover-it-nologo.jpg?1518543299&dl=1',alt1:'IT',src2:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552940591l/2574278._SY475_.jpg',alt2:'World'},
    {src1:'https://upload.wikimedia.org/wikipedia/en/7/7d/Tower_of_God_Volume_1_Cover.jpg',alt1:'ToG',src2:'https://images-na.ssl-images-amazon.com/images/I/91vj7Wi8WsL.jpg',alt2:'Trash'},
    ]

    
    
    return (<div className="slider-container">
                <Carousel variant={variant} fade={fade}>
                    {imageArray.map(i=>{return( 
                        <Carousel.Item interval={duration}>
                        <div className="double-frame">
                            <span className="image-container"><img className="image-style" src={i.src1} alt={i.alt1} /></span>
                            <span className="image-container"><img className="image-style" src={i.src2} alt={i.alt2} /></span>
                        </div>
                    </Carousel.Item>
                    )})}
                </Carousel>
            </div>);
}
 
export default imageSlider;