import React,{useEffect,useState} from 'react';
import Header from './header';
import './OrderHistory.css';
import Footer from './footer';
import Spinner from './spinner'
import {useLocation,useNavigate} from 'react-router-dom'
import {fetchOrders} from '../firebase'

const OrderHistory = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [loading,setLoading] = useState(true);
    const [order,setOrder] = useState();
    


    // const orders = location.state.orders
    const fetchTotal = (id) => {
        let lol = order
        let price = 0;
        let quan = 0;
        // console.log(lol.orders)
        lol = lol.orders.filter((order) => order[0].id===id)
        // console.log(lol[0])
        lol[0].forEach(i=>{price += i.Price;quan += i.Quantity})
        return({ price: price, quantity: quan})

    }

    
    useEffect(()=>{
        
        try{
            
        console.log(order)
            
        }catch{}
    },[])
    const getOrders = async() =>{
        const lol = await fetchOrders()
        setOrder(lol)
        setLoading(false)
        }            
        getOrders();
        // console.log(order)





    return (loading?<Spinner />:
        <div className='first'> 
    <div className="container-style">
    <hr className="hr-style"></hr>  
    <Header docs={location.state} />
    <hr className="hr-style"></hr>
    <h1>Order History</h1>
    <div className='history-orders-container'>
        {            
            order.orders.map(i=>{return(
            <span className="order-container">
            <span style={{width: '100%',display: 'flex',flexDirection: 'row',borderBottom:'2px solid black',padding:'3px',justifyContent: 'space-evenly'}}>
                <span style={{fontSize: '20px',fontWeight: 'bold'}}>Ordered on: {(new Date(i[0].Timestamp).toLocaleDateString('IN'))}</span>
                <span style={{fontSize: '20px',fontWeight: 'bold'}}>Time: {(new Date(i[0].Timestamp).toTimeString().slice(0,8))}</span>
                <span style={{fontSize: '20px',fontWeight: 'bold'}}>Price: ₹{fetchTotal(i[0].id).price}</span>
                <span style={{fontSize: '20px',fontWeight: 'bold'}}>Items bought: {fetchTotal(i[0].id).quantity}</span>
            </span>
            <span className="row-maker">
            {i.map(e=>{return(
                <span className="order-item-container"> 
            <span>
                <img style={{cursor: 'pointer'}} onClick={()=>navigate(`/book/${e.CoverURL[10]+e.CoverURL[15]}/`,{ state: [e]})} src={e.CoverURL} alt='lel'></img>
            </span>
            <span className="order-item-desc">
                <span style={{display:'flex',height:'11vh',width:'15vw',fontSize:'18px', overflow:'hidden'}}>{e.Name}</span>
                <span style={{fontSize:'22px'}}>Quantity:{e.Quantity}</span>
                <span style={{fontSize:'22px'}}>Price: ₹{e.Price}</span>
                </span>
            </span>
            )})}
            </span>
        </span>
        )})
        }
      
    </div>
    </div>
        <Footer/>
   </div>
    );
}
 
export default OrderHistory;
