import React from "react";

function GetCards(props){

    function setBundle(event) {
        let bundle = props.bundle;
        let newItem = {
            title:event.target.dataset.title,
            id:event.target.dataset.id,
            vendor:event.target.dataset.vendor,
            price:event.target.dataset.price,
            srcImage:event.target.dataset.sourceimage
        }
        bundle.push(newItem);
        props.setBundle(bundle);
        props.getBundled()
    }
    
    return(
    
    <div className = "card">
    <div className = "img-container">
           <img className = "card-img"
                    alt = {props.product.title} 
                    src={props.product.image.src}
                />
            </div>
            <div className ="card-body">
                <h4 className = "card-vendor">
                     {props.product.vendor} 
                </h4>
                <p className = "card-text card-descrip">
                    {props.product.title}
                </p>
                <p className = "card-text card-price">
                    ${props.product.variants[0].price}
                </p>
                <button 
                    data-title = {props.product.title}
                    data-sourceimage= {props.product.image.src}
                    data-price = {props.product.variants[0].price}
                    data-vendor = {props.product.vendor}
                    data-id = {props.product.id}
                    onClick = {setBundle}
                >
                    Add to Bundle
                </button>
            </div>

        </div>
    );

}

export default GetCards