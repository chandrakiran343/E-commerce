import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (<div>
            <div className="spinner-container-top">
                <span style={{backgroundColor:'blue'}} className="span-square"></span>
                <span style={{backgroundColor:'red'}} className="span-square"></span>
            </div>
            <div className="spinner-container-bottom">
                <span style={{backgroundColor:'red'}} className="span-square"></span>
                <span style={{backgroundColor:'blue'}} className="span-square"></span>
            </div>
        
        </div> );
}
 
export default Spinner