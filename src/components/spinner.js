import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (<div>
            <div className="spinner-container-top">
                <span  className="span-square1"></span>
                <span  className="span-square2"></span>
            </div>
            <div className="spinner-container-bottom">
                <span  className="span-square3"></span>
                <span  className="span-square4"></span>
            </div>
        
        </div> );
}
 
export default Spinner