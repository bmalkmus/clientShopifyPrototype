import React , {useEffect} from 'react';
import GetCards from '../indCard';
import Thumbnail from '../thumbnail'
import Summary from '../summary'
import Pagination from '../Pagination'
import './style.css'

function Products(props){

    console.log(location.href)

            useEffect(()=>{
                let selected = props.bundle
                if(selected.length !=0){
                    props.getBundled(true)
                }
            },[props.bundled])
            return (
                <div className="productOptionsContainer">
                    <Pagination pageName={props.pageName}/>
                    <h4>Step 1 of 3</h4>
                    <h1>Choose Your Items</h1>
                    <div className = "StepDescription">
                        <p> 
                        We’ve hand-selected the best products in one place. Select from the items below and fill up your box! Just select individual items, you can double up quantity in the cart.
                        </p>
                    </div>
                    <div className="bundlePreview">
                        {/* <div className = "boxSizes">
                            <a href="#">Small</a>
                            <a href="#">Medium</a>
                            <a href="#">Big</a>
                        </div> */}
                        <div className="seperator">
                            <div className ="left-box">
                                {props.bundled ? [...props.bundle].map(item => (
                                    <Thumbnail key={item.id}
                                        src={item.srcImage}
                                        title={item.title}
                                    />
                                )) : <a href="#productOptions">Start Selecting Items to Fill your Box</a>}
                            </div>
                            <div className ="right-box">
                                {props.bundled ? <Summary bundle={props.bundle} setBundle={props.setBundle} total={props.total} setTotal={props.setTotal}/> : <div> <ul><li>No items in your bundle.</li></ul></div>}
                                
                            </div>
                        </div>
                    </div>
                    <div id = "productOptions">
                    {!props.loaded ? 
                    <div>Loading...</div> : 
                        props.products.products.filter(items => items.product_type !== "Card").map(product => (
                            <GetCards product ={product} key ={product.id} setBundle={props.setBundle} total = {props.total} setTotal={props.setTotal} bundle={props.bundle} getBundled= {props.getBundled}/>
                        ))
                    }
                    </div>
                </div>
            )
}

export default Products
