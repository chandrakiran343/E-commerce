import React from 'react';
import './card.css'

const Card = ({
    text,
    imgurl,
    height,
    width
}) => {
    return (
        <div >
            <button onclick={()=>{}}>
                <div id='img-container' className="card-style">
                    <img id = 'card-img'alt='AoT' src={`${imgurl}`}></img>
                    <span id='card-text'>{`${text}`}</span>
                </div>
            </button>
        </div>);
}   
 
export default Card;