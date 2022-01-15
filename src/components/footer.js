import React from 'react';
import './footer.css';

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
            <h6 className='fourth'>chandrakiran@gmail.com</h6>
            <h6 className='first'>Phone No: 9346853170</h6>
            <h6 className='fifth'>8096435116</h6>
            </div>
            <div className='seventh'></div>
            <div className='ninth'>
                <u><h5>Follow Us:</h5></u>
                <h6 className='first'>Instagram: <a href='https://www.instagram.com/karthik.924/'>karthik.924</a></h6>
                <h6 className='tenth'><a href='https://www.instagram.com/chandra_kiran_reddy08/'>chandra_kiran_reddy08</a></h6>
            </div>
            </div>
        </div>
    </div>
     );
}
 
export default Footer;