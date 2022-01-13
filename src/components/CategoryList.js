import React from 'react';
import './CategoryList.css'


const CategoryList = () => {

    const categoryArray = ['Biography','Autobiography','Business/Economy','Encyclopedia','Religion and Spirituality','Travel',
                            'Science','Review','Sports','Novels','Audio Novels','Visual Novels','Graphic Novels','Manga','Comics','Light Novels']
    return (  
        <div className="side-bar">
            <div id='#category' className="category-container">
                <p className='heading'>Categories</p>
                {categoryArray.map(category=>{return(
                        <button style={{fontSize: '18px',marginBottom:'5px',textAlign:'center',width:'100%'}} className="btn btn-info"><span>{category}</span></button>
                )})}
            </div>
        </div>
    );
}
 
export default CategoryList;