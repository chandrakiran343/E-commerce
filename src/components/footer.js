import React from 'react';
import './footer.css';
// import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
    return ( 
    <div id='footer'>
        <div className='absolute'>
            <u><h5>About Us:</h5></u>
            <h6 className='first'>This Web Application is done by: D.Chadra Kiran</h6>
            <h6 className='second'>Karthik Emmadi</h6>
            <h6 className='first'>We are students of Vignana Bharathi Institute of Technology,Studying in 2nd year in Information Technology. We worked on this application as a part of our Participatory Learning Activity.</h6>
            <h6 className='first'>Institute Address: Aushapur Village, Ghatkesar, MEDCHAL , 501301</h6>
            <hr size='5' className='third'></hr>
            <div className='sixth'>
            <div className='eighth'>
            <u><h5>Contact Us:</h5></u>
            <h6 className='first'>Email: emmadikarthik924@gmail.com</h6>
            <h6 className='fourth'>chandra.dkiran@outlook.com</h6>
            </div>
            <div className='seventh'></div>
            <div className='ninth'>
                <u><h5>Follow Us:</h5></u>
                <h6 className='first'>Github: <a href='https://github.com/chandrakiran343'>karthik-924</a></h6>
                <h6 className='tenth'><a href='https://github.com/karthik-924'>chandrakiran343</a></h6>
                <button onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}} style={{margin:'10px 20px 10px 20px'}} className="btn btn-default" ><span className="navbtn-style">
                <i style={{padding:'5px'}} class="fas fa-arrow-up"></i>
                Back to Top</span></button>
            </div>
            </div>
        </div>
    </div>
     );
}
 
export default Footer;