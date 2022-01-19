import React,{useEffect,useState} from 'react';
import './mainPage.css'
import ImageSlider from './imageSlider'
import CategoryList from './CategoryList'
import Card from './card.js'
import Header from './header';
import Footer from './footer';
import {useLocation,useNavigate} from 'react-router-dom'
import { getCategories } from '../firebase';
import Spinner from './spinner';



const MainPage = () => { 

    // const location = useLocation();

    const navigate = useNavigate();
    const [documents, setDocs] = useState();
    const [load,setLoad] = useState(true);
    const [authorFocus, setAuthor] = useState(); 

    


    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const res = await getCategories()
                setDocs(res.docs)
                console.log(res)
                const rip = res.docs.filter(items => items.Author === 'J.R.R. Tolkien');
                setAuthor(rip)
                setLoad(false)
            }
            catch{
                console.log('error')
            }
        }
        fetchCategories();
    },[])

    


    
        return (load?<Spinner />:
            <div className="container-style">
        <hr className="hr-style"></hr>  
        <Header docs={documents} />
        <hr className="hr-style"></hr>
        <div className="upper-body">
        <CategoryList loading={false} docs={documents} />   
        <div className="body">
        <span style={{fontSize:'30px',fontWeight:'bolder',marginLeft:'10vh'}}>Popular Picks</span>
            
            <div className="slider-container">
                
                <ImageSlider images={{documents}} variant='dark' />

            </div>
            <hr style={{width: '100%',marginTop:'10px',border: '5px solid black'}} />
            <div className="spotlight-style"><span className="banner-style">Author SpotLight:- {authorFocus[0].Author}</span>
                <hr />
                <span className="series-name">The Lord of the Rings</span>
                <span style={{textAlign: 'center',fontWeight:'bold'}}></span>
                <div className='card-container'>
                    {authorFocus.map(i=>{return(<Card doc={i} text='NOW 41% OFF' imgurl={i.CoverURL} />)
                })}
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>);
}
 
export default MainPage;