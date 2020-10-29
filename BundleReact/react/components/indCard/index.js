import React from "react";
import './style.css';

function GetCards(props){

    function setBundle(event) {
        let currentTotal = props.total
        let bundle = props.bundle;
        let newItem = {
            title:event.target.dataset.title,
            id:event.target.dataset.id,
            vendor:event.target.dataset.vendor,
            price:event.target.dataset.price,
            srcImage:event.target.dataset.sourceimage
        }
        let price = parseInt(event.target.dataset.price)
        let newPrice = currentTotal+price
        bundle.push(newItem);
        props.setBundle(bundle);
        props.setTotal(newPrice)
        props.getBundled(true)
    }
    
    return(
    
    <div className = "card" key ={props.product.variants[0].id}>
    <div className = "img-container">
           <img className = "card-img"
                    alt = {props.product.title} 
                    src={props.product.image.src}
                />
            </div>
            <div className ="card-body">
                <p className = "card-text card-descrip">
                    {props.product.title}
                </p>
                <p className = "card-vendor">
                     {props.product.vendor} 
                </p>
                <p className = "card-text card-price">
                    ${props.product.variants[0].price}
                </p>
                <button 
                    data-title = {props.product.title}
                    data-sourceimage= {props.product.image.src}
                    data-price = {props.product.variants[0].price}
                    data-vendor = {props.product.vendor}
                    data-id = {props.product.variants[0].id}
                    onClick = {setBundle}
                >
                    Add to Bundle
                </button>
            </div>

        </div>
    );

}

export default GetCards