import React, {useEffect} from 'react'
import GetCards from '../indCard'
import {useHistory} from "react-router-dom";

function Box (props) {

    const history = useHistory()
    // useEffect(()=>{
    //     let selected = props.bundle
    //     if(selected.length !=0){
    //         props.getBundled(true)
    //     }
    // },[props.bundled])

    function buttonClick(event){
        let temp = [];
        let newItem = {
            title:event.target.dataset.title,
            id:event.target.dataset.id,
            vendor:event.target.dataset.vendor,
            price:event.target.dataset.price,
            srcImage:event.target.dataset.sourceimage
        }
        let price = parseInt(event.target.dataset.price)
        temp.push(newItem);
        let currentTotal = props.total
        props.setBundle(temp);
        props.setTotal(currentTotal+=price)
        history.push("/pages/test/bundleproducts")

    }

    function cards(product){
        return (
            <div key ={product.id}>
                <img src = {product.image.src}/>
                <p>{product.title}</p>
                <button
                    data-title = {product.title}
                    data-sourceimage= {product.image.src}
                    data-price = {product.variants[0].price}
                    data-vendor = {product.vendor}
                    data-id = {product.id}
                    onClick = {buttonClick}
                >
                    Add card to Bundle
                </button>
            </div>
        )
    }



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
                            cards(product)
                        ))
                }
            </div>
        </div>
    )
}

export default Box