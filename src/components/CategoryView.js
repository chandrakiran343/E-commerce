import React,{useState,useEffect} from 'react';
import Header from './header.js'
import CategoryList from './CategoryList.js'
import Footer from './footer.js'
import './CategoryView.css'
import Spinner from './spinner.js';
import {getBooks} from '../firebase'
import { useLocation,useNavigate } from 'react-router-dom';

const CategoryView = () => {

    const [objects,setObjects] = useState()

    const navigate = useNavigate();
    const location = useLocation();
    

    const [loading,setLoading] = useState(true)


    const category = location.state.category

    // console.log(location)
    
    useEffect(() => {
        const fetchBooks = async () =>{
            try{
                const res = await getBooks(location.state.category)
                setObjects(res)
                setLoading(false)
            }   
            catch{
                console.log('error')
            }
        }
        fetchBooks();
    })

    const handleClick = (obj)=>{
        console.log(obj)
        navigate(`/book/${obj.CoverURL[10]+obj.CoverURL[15]}/`,{state:[obj]})
    }


    
    return (
      loading?<Spinner />:
      <div>
      <Header id={category} docs={location.state.docs} />
      <hr style={{color: 'white'}}></hr>
      <div className='categorylist-style'>
          <CategoryList loading={false} />
          <div className='categorybook-container'>
              <span className='category-heading'>Selected category: {location.state.category} </span>
              <hr style={{width:'100%',border:'2px solid black'}}></hr>
              <div className='bookcontainer-style'>
              {objects.map(i=>{return(
                  <div className='book-style'>
                      <button style={{color:'rgb(59, 151, 252)',marginBottom:'5px',height:'20%'}} onClick={() =>handleClick(i)}><span style={{width:'100%',fontSize:'1em',textAlign:'center',fontWeight:'bolder'}}>{i.Name}</span></button>
                      <div className='content-holder'>
                          <span onClick={()=>handleClick(i)} className='span-the-image'><img className='book-cover-style' src={i.CoverURL} alt='lol' /></span>
                          <div className='book-description'>
                          <h7 style={{textAlign:'center',padding:'0px',fontWeight:'bolder',borderBottom:'0.5px solid black',borderTop:'0.5px solid black',width:'100%'}}>{i.Author}</h7>
                          <h8 style={{display:'flex',flexDirection:'row',fontWeight:'bolder',justifyContent: 'space-between',padding:'0px',width:'100%',borderBottom:'0.5px solid black'}}>
                                  <p style={{marginBottom:'5px'}}>{'Published: '+ i.Published}</p>
                                  <p style={{marginBottom:'5px'}}>{i.Price+'₹'}</p>
                                  <p style={{marginBottom:'5px'}}>{i.Rating+'/10 Rating'}</p>
                          </h8>
                          <span style={{display:'flex',height:'68%',flexDirection:'column',flexWrap:'wrap',overflowY:'scroll',padding:'5px 10px 5px 10px'}}>{i.Summary}</span>
                          </div>
                          
                      </div>
                  </div>
              )})}
              </div>
              
          </div>
      </div>
      <Footer />

  </div>
        );
}
 
export default CategoryView;