import React from 'react';

function Button(){
    
    function clicked() {
        console.log("Clicked")
    }
    return(
        <div>
            <button onClick = {clicked}>This is my test Button</button>
        </div>
    )
}

export default Button