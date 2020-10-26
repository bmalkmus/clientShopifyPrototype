import React from 'react';
import axios from 'axios';

function Products (){
    axios.get("https://23-test-store.myshopify.com/admin/api/2020-10/products.json")
        .then(response => {
            console.log(response)
        })
    

    return (
        <div>
            
        </div>
    )
}

export default Products
