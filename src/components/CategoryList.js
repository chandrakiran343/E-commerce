import React, {useEffect, useState} from 'react';
import './CategoryList.css'
import {getCategories} from '../firebase.js'
import Spinner from './spinner'
import {useNavigate} from 'react-router-dom'



const CategoryList = ({loading = true,docs}) => {

    const navigate = useNavigate();

    const [category, setCategories] = useState();
    const [load,setLoad] = useState(true);
    
    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const res = await getCategories()
                setCategories(res.categories)
                setLoad(loading)
            }
            catch{
                console.log('error')
            }
        }
        fetchCategories();
    },[])
    const handleClick = (category)=>{
        navigate(`/Category/${category[0]}/${category}`,{ state: { category: category, docs}})
        

    }

    
    

    

        

    return ( load?<Spinner />:<div className="side-bar">
    <div id='#category' className="category-container">
        <p className='heading'>Categories</p>
        {category.map(category=>{return(
                <button onClick={()=>handleClick(category.id)} style={{fontSize: '18px',marginBottom:'5px',textAlign:'center',width:'100%'}} className="btn btn-info"><span>{category.id}</span></button>
        )})}
    </div>
</div>
    );
}
 
export default CategoryList;