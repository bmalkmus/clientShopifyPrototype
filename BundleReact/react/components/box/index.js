import React from 'react'
import GetCards from '../indCard'

function Box (props) {
    return(
        <div className = "boxOptionsContainer">
            <h4>Step 1 of 3</h4>
            <h1>Choose Your Box Color</h1>
            <div className = "StepDescription">
                <p> 
                    Welcome to the easiest way to send someone a custom gift, in 3 simple steps. Add to cart and repeat for multiple boxes, or update your quantity in the cart.
                </p>
            </div>
            <div className = "boxOptions">
                {!props.loaded ? 
                    <div>Loading...</div> : 
                        props.products.products.filter(items => items.product_type === "Card").map(product => (
                            <GetCards product ={product} key ={product.id}/>
                        ))
                }
            </div>
        </div>
    )
}

export default Box