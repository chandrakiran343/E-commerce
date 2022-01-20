import React,{useState,useEffect} from 'react';
import './header.css'
import { useNavigate } from "react-router-dom";


const Header = (
    {docs, heading=true}
) => {
    const [search,setSearch] = useState('')
    const [result,setResult] = useState()
    const navigate = useNavigate();

    useEffect(()=>{

        setResult()

        if(docs.length > 0 && search.length > 2){
            let names = docs.map(e=>{return(e.Name)})
            let authors = docs.map(e=>{return(e.Author)})
            let searchQuery = search.toLowerCase()
            let searchNames = names.filter(i=>i.slice(0,searchQuery.length).toLowerCase()===searchQuery)
            let searchAuthors = authors.filter(i=>i.slice(0,searchQuery.length).toLowerCase()===searchQuery)
            setResult(searchNames)
        }
        console.log(result)
    },[search])

    const handleRoute = (obj)=>{

        navigate(`/book/search?result=${obj[0]+obj[3]}`,{state: docs.filter(e=>e.Name === obj)})
    }
  

    const handleClick=(route)=>{
        navigate(route);
    }
    const scrollToBottom = () => {window.scrollTo({top:1000000,behavior:'smooth'})}

    return (
        <div>
            <div id='header' className="header">
            {heading?<span id='heading' className="heading-style" active>Book Store
            </span>:false}
            <div className="search-style">
                <div className="search-bar-style">
                    <input onChange={(e)=>{setSearch(e.target.value)}} value={search} style={{fontSize:"20px",fontFamily:'sans-serif',marginRight:'10px',borderColor:'purple',textAlign:'center'}} type="text"/>
                    <button type='submit' className="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div className={result!==undefined ? "results-style":'hide-style'}>
                    {result!==undefined && result.map(i=>{return(
                        <div onClick={()=>handleRoute(i)} className='result-style'>{result.length ? i:'Not found'}</div>)})}
                </div>
                <div className="nav-container">
                    <nav id='navi' className="nav-style">
                        <button onClick={()=>handleClick('/')} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Home</span></button>
                        <button  onClick={()=>scrollToBottom()} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default" ><span className="navbtn-style">About Us</span></button>
                        <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Menu</span></button>
                        <button onClick={()=>navigate('/OrderHistory',{state: docs})} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Order History</span></button>
                        <button onClick={()=>navigate(`/your-kart`,{state: docs})} className="btn btn-default"><i style={{position:'relative',right:'45%'}} class="fas fa-shopping-cart fa-2x"></i></button>
                    </nav>
                </div>
            </div>
        </div>
            
        </div>
     );
}
 
export default Header;