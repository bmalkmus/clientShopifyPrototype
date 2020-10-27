import React from 'react';



function Summary (props){
    
    function removeItem(event){
        let temp = props.bundle
        let id = event.target.dataset.id
        temp = temp.filter(item => item.id !== id)
        props.setBundle(temp)
        let price = parseInt(event.target.dataset.price)
        props.setTotal(props.total-=price)

    }

    return (
        <div>
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
                        <tr key= {item.id}>
                            <td>1</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><button
                                data-id={item.id}
                                onClick={removeItem}
                            >X</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <span>Total Price: {props.total}</span>
            
        </div>
    )
}

export default Summary