import React from 'react'
import {useHistory} from "react-router-dom";
import Pagination from '../Pagination'
import "./style.css";

function Box (props) {

    const history = useHistory()

    function buttonClick(event){
        let temp = [];
        let newItem = {
            title:event.target.dataset.title,
            id:event.target.dataset.id,
            vendor:event.target.dataset.vendor,
            price:event.target.dataset.price,
            srcImage:event.target.dataset.sourceimage,
            card:event.target.dataset.card
        }
        let price = parseInt(event.target.dataset.price)
        temp.push(newItem);
        let currentTotal = props.total
        props.setBundle(temp);
        props.setTotal(currentTotal+=price)
        history.push(props.pageName + "/bundleproducts")

    }

    function cards(product){
        return (
            <div key ={product.id} className = "cardContainer">
                <img className = "cardImage" src = {product.image.src}/>
                <p className="cardTitle">{product.title}</p>
                <button
                    data-title = {product.title}
                    data-sourceimage= {product.image.src}
                    data-price = {product.variants[0].price}
                    data-vendor = {product.vendor}
                    data-id = {product.variants[0].id}
                    data-card = {product.product_type}
                    onClick = {buttonClick}
                    className = "cardButton"
                >
                    Add card to Bundle
                </button>
            </div>
        )
    }



    return(
        <div className = "cardOptionsContainer">
            <Pagination pageName={props.pageName}/>
            <h4>Step 1 of 3</h4>
            <h1>Choose Your Card option</h1>
            <div className = "StepDescription">
                <p> 
                    Welcome to the easiest way to send someone a custom gift, in 3 simple steps. Add to cart and repeat for multiple boxes, or update your quantity in the cart.
                </p>
            </div>
            <div className = "cardOptions">
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