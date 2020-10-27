import React from 'react';

function Thumbnail(props){
    return (
        <div>
            <img src={props.src} alt={props.title}/>
        </div>
    )
}

export default Thumbnail