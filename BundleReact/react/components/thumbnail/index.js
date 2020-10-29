import React from 'react';
import './style.css'

function Thumbnail(props){
    
    return (
        <div>
            <img className='thumbnails' src={props.src} alt={props.title} />
        </div>
    )
}

export default Thumbnail