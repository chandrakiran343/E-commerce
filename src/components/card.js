import React from 'react';
import './card.css'

const Card = ({
    text,
    imgurl
}) => {
    return (
        <div >
            <button onclick={()=>{}}>
                <div className="card-style">
                    <img alt='AoT' src={`${imgurl}`}></img>
                    <span>{`${text}`}</span>
                </div>
            </button>

        </div>);
}   
 
export default Card;