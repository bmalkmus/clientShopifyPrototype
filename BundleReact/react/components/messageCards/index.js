import React from 'react';

function GiftCardOptions() {
    console.log("Component fired")
    return(
    <div>
           <h4>Step 3 of 3</h4>
            <h1>Choose Your Card Choice</h1>
            <div className = "StepDescription">
                <p> 
                Choose the perfect card for the occasion from our selection of exclusive designs. Our team handwrites each and every note to keep your gifts personal. (Plus, we have great handwriting.)
                </p>
            </div>
            <div>
                <div className="cardImage">
                    <img src="" alt="Card Choice Image"/>
                </div>
                <form>
                    <div className="form-group" id="subjectName">
                        <label>To</label>
                        <input type="text" placeholder="Sandy"/>
                    </div>

                    <div className="form-group" id="subjectAdd" placeholder="Jane">
                        <label>From</label>
                        <input type="text"/>
                    </div>

                    <div className="form-group" id="mailBody" placeholder="Thinking of You on this rainy day">
                        <label>Message on Card</label>
                        <textarea rows="6"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" value ="Blank" />
                        <label>Check to leave a blank card to write in yourself</label>
                    </div>
                </form>
                <button>Add to Cart</button>
            </div>
    </div>
    )
}

export default GiftCardOptions