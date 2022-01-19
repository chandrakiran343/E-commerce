import React from 'react';
import './card.css'
import {useNavigate} from 'react-router-dom'


const Card = ({
    text,
    imgurl,
    doc
}) => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/book/${imgurl[10]+imgurl[15]}/`,{state:[doc]})
    }

    return (
        <div >
            <button onClick={handleClick}>
                <div id='img-container' className="card-style">
                    <img id = 'card-img'alt='AoT' src={`${imgurl}`}></img>
                    <span id='card-text'>{`${text}`}</span>
                </div>
            </button>
        </div>);
}   
 
export default Card;