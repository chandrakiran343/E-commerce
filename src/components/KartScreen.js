import React,{useState,useEffect} from 'react';
import './KartScreen.css'
import {kartItems} from '../firebase'
import Spinner from './spinner'
import Header from './header'
import Anime from './anime'
import {useLocation} from 'react-router-dom'



const KartScreen = () => {
    
    const [loading,setLoading] = useState(true)
    const [order,setOrder] = useState()
    const [quantity,setQuan] = useState()
    const [total,setTotal] = useState(0)
    const [price,setPrice] = useState(0)
    const [time,setTime] = useState(0)

    const location = useLocation();
    
    useEffect(()=>{
        try{
            const fetchItems = async () => {
                const books = await kartItems();
                console.log(books)
                setOrder(books)
                let quantityArray = []
                let t=0, p = 0;
                quantityArray = books.map(i=>{return({value:i.Quantity,id:i.id,price:i.Price,singleprice:i.Price})});
                quantityArray.forEach(i=>t+=i.value)
                quantityArray.forEach(i=>p+=i.price * i.value)
                console.log(quantityArray)
                setPrice(p)
                setTotal(t)
                setQuan(quantityArray)
                setLoading(false)
            }
            fetchItems();
        }catch{
            console.log('666')
        }
        try{
            
        }catch{}
    },[])
    const sendData = order;
    sendData!==undefined && quantity!==undefined && sendData.forEach(i=>{
        i.Quantity = quantity.filter(e=>e.id===i.id)[0].value
        i.Price = quantity.filter(e=>e.id === i.id)[0].price 
    })


    
    
   
    const handleIncrement = (id) =>{
        let lol = [...quantity]
        lol.filter(e=>e.id===id)[0].value +=1
        lol.filter(e=>e.id===id)[0].price += lol.filter(e=>e.id===id)[0].singleprice
        setPrice(price+lol.filter(e=>e.id===id)[0].singleprice)
        setQuan(lol)
        setTotal(total+1)
        console.log(quantity)
        
    }
    const handleDecrement = (id) =>{
        let lol = [...quantity]
        if(lol.filter(e=>e.id===id)[0].value===1){return}
        else{lol.filter(e=>e.id===id)[0].value-=1
            lol.filter(e=>e.id===id)[0].price -= lol.filter(e=>e.id===id)[0].singleprice
            setPrice(price-lol.filter(e=>e.id===id)[0].price)
            setQuan(lol)
            setTotal(total-1)
        }
    }

    const handleDelete=(id) => {
        let lol = [...order]
        let lol2 = [...quantity]
        let prePrice = price;
        let newPrice = prePrice - lol2.filter(e=>e.id===id)[0].price;
        let preQuantity = total
        let newQuantity = preQuantity - lol2.filter(e=>e.id===id)[0].value
        lol = lol.filter(e=>e.id!==id)
        lol2 = lol2.filter(e=>e.id!==id)
        setOrder(lol)
        setQuan(lol2)
        setTotal(newQuantity)
        setPrice(newPrice)
    }


    
    return (
        loading?<Spinner />:
        <div className="screen-style">
        <Header heading={false} docs={location.state} />
            <div className="kart-container">
                <div className="kart-heading">
                    <i style={{position:'relative',right:'45%'}} class="fas fa-shopping-cart fa-2x"></i>
                    <span style={{fontSize:'23px',textAlign:'center',position:'relative',right:'12%'}} className="badge bg-primary">In Cart: {total}</span>
                    <span style={{fontSize:'23px',marginRight:'20px'}} class="badge bg-primary">Total: {price}₹</span>
                </div>
                    {order.map(i=>{return(
                        <div className="kart-item">
                            <span className='kart-span-the-image'><img className='kart-book-cover-style' src={i.CoverURL} alt='lol' /></span>
                            <span style={{display:'flex',height:'100%',width:'33%',flexDirection:'column',justifyContent:'center',flexWrap:'wrap',overflowX:'scroll'}}><span style={{fontSize:'18px'}} className='badge bg-secondary'>{i.Name}</span></span>
                            <div className='control-bar-style'>
                                <button style={{fontSize:'22px',width:'40px'}} onClick={()=>handleDecrement(i.id)} className='btn btn-secondary'>-</button>
                                <span style={{fontSize:'22px'}} className='badge bg-light text-dark'>Quantity: {quantity.filter(e=>e.id === i.id)[0].value}</span>
                                <button style={{fontSize:'22px',width:'40px'}} onClick={()=>handleIncrement(i.id)} className='btn btn-secondary'>+</button>
                                <button style={{display:'flex',padding:'10px 10px 10px 10px',fontSize:'22px',width:'40px',justifyContent:'center'}} onClick={()=>handleDelete(i.id)} className='btn btn-danger'><i class="fas fa-trash"></i></button>
                            </div>
                            <span style={{fontSize:'22px',position:'relative',left:'3%'}} className='badge bg-light text-dark'>
                                Price:{quantity.filter(e=>e.id === i.id)[0].price}₹
                            </span>
                        </div>
                    )})}
            </div>
            <Anime orders={sendData} docs={location.state} />

        </div>
        );
}
 
export default KartScreen;