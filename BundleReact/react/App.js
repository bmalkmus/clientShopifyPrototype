import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Box from './components/box';
import GiftCardOptions from './components/messageCards'
import Pagination from "./components/Pagination"
import axios from 'axios'

function App () {
    const [products,setProducts] =useState([])
    const [loaded, setLoad] = useState(false)
    const [bundle, setBundle] = useState([])

    function getProducts(){
        axios.get("https://23-test-store.myshopify.com/admin/api/2020-10/products.json")
        .then(response => {
            setProducts(response.data)
            setLoad(true)
        })
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <Router>
            <Pagination/>
            <Switch>
                <Route exact path={["/pages/test"]}>
                    <Box products ={products} loaded={loaded} bundle = {bundle} setBundle = {setBundle}/>
                </Route>
                <Route exact path={["/pages/test/bundleproducts"]}>
                    <Products products ={products} loaded={loaded} bundle = {bundle} setBundle = {setBundle}/>
                </Route>
                <Route exact path={["/pages/test/card"]}>
                    <GiftCardOptions/>
                </Route>
            </Switch>
        </Router>
        
    )
}

export default App