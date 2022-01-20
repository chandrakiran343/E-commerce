import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaceOrder } from '../firebase'
import './anime.css'


const Anime = ({docs,orders}) => {

    const navigate = useNavigate();

    const doOrder = async(orders)=>{
        console.log(orders)
        await PlaceOrder(orders)
    }


    const handleClick = () => {
        const btn = document.getElementById('b')
        btn.classList.toggle('animating')
        orders.forEach(i=>{i.Timestamp = new Date().getTime()})
        setTimeout(placeOrder,3000)
    }
    const placeOrder = () => {
        doOrder(orders)
        navigate('/OrderHistory',{state: {docs, orders}})
    }
    
    return ( <div className="anime-body">
                <button id='b' onClick={handleClick} className='lel'>Place Order</button>
            <div onClick= {handleClick} className='svg-container'>
                <span className='icon-style'><i  className='fas fa-check fa-3x' /></span>
            </div>
        </div>);
}
export default Anime;