import React , {useRef} from 'react';
import axios from 'axios';
import Pagination from '../Pagination'
import './style.css';

function GiftCardOptions(props) {
    const toRef = useRef();
    const fromRef = useRef();
    const messageRef = useRef();
    const checkedRef = useRef();

    function addCart(){
        let idBundle = props.id
        let baseUrl = (location.href.slice(0,location.href.indexOf("/",9)))
        let to, from, message;
        if(checkedRef.current.checked){
            to = "blank";
            from ="blank";
            message="blank"
         }
        else{
            to = toRef.current.value;
            from = fromRef.current.value;
            message = messageRef.current.value;
        }
        let order = {items:[]}
        const bundle = props.bundle.filter(item=>item.card !== "Card")
        let card = props.bundle.filter(item=>item.card === "Card")
        let orderCard = {
            quantity: 1,
            id: parseInt(card[0].id),
            properties: {
                "To": to,
                "From":from,
                "Message":message,
                "Bundle":idBundle    
            }        
        }
        order.items.push(orderCard);

        for(let i = 0; i < bundle.length; i++){
            let item = {
                quantity: 1,
                id: parseInt(bundle[i].id),
                properties: {
                    "Bundle":idBundle
                }
            }
            order.items.push(item);
        }
        axios.post(baseUrl+'/cart/add.js', order)
        .then(res=>{
            alert("Bundle added to cart")
            idBundle+=1
            props.setID(idBundle)
        })
        .catch(err=>console.log(err))

    }


    return(
    <div className="messageContainer">
        <Pagination pageName={props.pageName}/>
           <h4>Step 3 of 3</h4>
            <h1>Choose Your Message</h1>
            <div className = "StepDescription">
                <p> 
                Choose the perfect message for your gift! Our team handwrites each and every note to keep your gifts personal. (Plus, we have great handwriting.)
                </p>
            </div>
            <div>
                {/* <div className="cardImage">
                    <img src="" alt="Card Choice Image"/>
                </div> */}
                <form>
                    <div className="form-group" id="subjectTo">
                        <label>To</label>
                        <input type="text" placeholder="Sandy" ref = {toRef}/>
                    </div>

                    <div className="form-group" id="subjectFrom" >
                        <label>From</label>
                        <input type="text" placeholder="Jane" ref = {fromRef}/>
                    </div>

                    <div className="form-group" id="message" >
                        <label>Message on Card</label>
                        <textarea rows="6" placeholder="Thinking of You on this rainy day" ref = {messageRef}></textarea>
                    </div>
                    <div>
                        <input type="checkbox" value ="Blank" ref = {checkedRef}/>
                        <label>Check to leave a blank card to write in yourself</label>
                    </div>
                </form>
                <button onClick={addCart}>Add to Cart</button>
            </div>
    </div>
    )
}

export default GiftCardOptions