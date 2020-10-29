import React from 'react';
import {useHistory} from "react-router-dom";
import './style.css';




function Summary (props){
    
    const history = useHistory()

    function removeItem(event){
        let temp = props.bundle
        let currentTotal = props.total
        let id = event.target.dataset.id
        temp = temp.filter(item => item.id !== id)
        props.setBundle(temp)
        let price = parseInt(event.target.dataset.price)
        let newPrice = currentTotal-price
        props.setTotal(newPrice)

    }

    function completeBundle(){
        if(props.total >= 28.00){
            history.push("/pages/test/card")
        }
        else{
            alert("Sorry your total needs to be equal to $28.00 or more")
        }
    }

    return (
        <div is="itemized">
            <h3>Box Contents</h3>
            <table>
                <thead>
                    <tr>
                        <th>Quanity</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {[...props.bundle].map(item=>{
                    return(
                        <tr key= {item.id + Math.random()*10}>
                            <td>1</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><button
                                data-id={item.id}
                                data-price={item.price}
                                onClick={removeItem}
                                className = "removeButton"
                            >X</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="sumz">
                <span className ="price">Total Price: {props.total}</span>
                <button id = "addBundle"onClick={completeBundle}>Complete Bundle</button>
            </div>
           
            
        </div>
    )
}

export default Summary