import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Box from './components/box';
import GiftCardOptions from './components/messageCards'
import Pagination from "./components/Pagination"
import axios from 'axios'

function App () {
    const [id, setID] = useState(1)
    const [products,setProducts] =useState([])
    const [loaded, setLoad] = useState(false)
    const [bundle, setBundle] = useState([])
    const [total,setTotal] = useState(0)
    const [bundled, getBundled] = useState(false)

    function getProducts(){
        axios.get("/admin/api/2020-10/products.json")
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
            <Switch>
                <Route exact path={["/pages/test"]}>
                    <Box products ={products} 
                        loaded={loaded} 
                        bundle = {bundle} 
                        setBundle={setBundle} 
                        total={total}
                        setTotal={setTotal}
                    />
                </Route>
                <Route exact path={["/pages/test/bundleproducts"]}>
                    <Products 
                        products ={products} 
                        loaded={loaded} bundle = {bundle} 
                        setBundle = {setBundle} 
                        bundled={bundled} 
                        getBundled={getBundled}
                        total={total}
                        setTotal={setTotal}
                    
                    />
                </Route>
                <Route exact path={["/pages/test/card"]}>
                    <GiftCardOptions bundle = {bundle} id={id} setID={setID}/>
                </Route>
            </Switch>
        </Router>
        
    )
}

export default App