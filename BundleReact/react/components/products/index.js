import React , {useState, useEffect} from 'react';
import GetCards from '../indCard';
import Thumbnail from '../thumbnail'
import Summary from '../summary'

function Products(props){

            const [bundled, getBundled] = useState(false)


            useEffect(()=>{
                let selected = props.bundle
                if(selected.length !=0){
                    getBundled(true)
                }
            },[bundled])
            return (
                <div className="productOptionsContainer">
                    <h4>Step 1 of 3</h4>
                    <h1>Choose Your Items</h1>
                    <div className = "StepDescription">
                        <p> 
                        We’ve hand-selected the best products in one place. Select from the items below and fill up your box!
                        </p>
                    </div>
                    <div className="bundlePreview">
                        <div className = "boxSizes">
                            <a href="#">Small</a>
                            <a href="#">Medium</a>
                            <a href="#">Big</a>
                        </div>
                        <div className="seperator">
                            <div className ="left box">
                                <button>Start Selecting Items to Fill your Box</button>
                                {bundled ? [...props.bundle].map(item => (
                                    <Thumbnail
                                        src={item.srcImage}
                                        title={item.title}
                                    />
                                )) : <div>no products......</div>}
                            </div>
                            <div className ="right box">
                                <Summary/>
                            </div>
                        </div>
                    </div>
                    <div className = "productOptions">
                    {!props.loaded ? 
                    <div>Loading...</div> : 
                        props.products.products.filter(items => items.product_type !== "Card").map(product => (
                            <GetCards product ={product} key ={product.id} setBundle={props.setBundle} bundle={props.bundle} getBundled= {getBundled}/>
                        ))
                    }
                    </div>
                </div>
            )
}

export default Products
