import React from 'react';
import './anime.css'


const Anime = () => {

    const handleClick = () => {
        const btn = document.getElementById('b')
        btn.classList.toggle('animating')
    }
    
    return ( <div className="body">
            <button id='b' onClick={handleClick} className='lel'>Nice</button>
            <div onClick= {handleClick} className='svg-container'>
                <span className='icon-style'><i  className='fas fa-check fa-3x' /></span>
            </div>
        </div>);
}
 
export default Anime;