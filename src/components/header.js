import React,{useState} from 'react';
import './header.css'
import { useNavigate } from "react-router-dom";

const Header = (
    {id}
) => {
    const [search,setSearch] = useState('')
    const navigate = useNavigate();
    const handleSearch = () => {
        console.log(search)
    }

    const handleClick=(route)=>{
        console.log(route)
        navigate(route);
    }
    return ( 
        <div>
            <div className="header">
            <span className="heading-style">Book Store
            </span>
            <div className="search-style">
                <input onChange={(e)=>{setSearch(e.target.value)}} style={{fontSize:"20px",fontFamily:'sans-serif',marginRight:'10px',borderColor:'purple',textAlign:'center'}} type="text"/>
                    <button type='submit' onClick={()=>{handleSearch()}} className="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                    <div className="nav-container">
                    <nav id='navi' className="nav-style">
                        <button onClick={()=>handleClick('/')} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Home</span></button>
                        <a style={{textDecoration:'none'}} href='#footer'><button onClick={()=>{}} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default" ><span className="navbtn-style">About Us</span></button></a>
                        <button style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Menu</span></button>
                        <button onClick={()=>handleClick('/OrderHistory')} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default"><span className="navbtn-style">Order History</span></button>
                    </nav>
                </div>
            </div>
        </div>
            
        </div>
     );
}
 
export default Header;