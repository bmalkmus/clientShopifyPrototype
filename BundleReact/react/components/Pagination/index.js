import React from 'react'
import "./style.css"
import {useHistory} from "react-router-dom";

function Pagination() {
    const history = useHistory()
    function pageSwitch(event){
        switch (event.target.dataset.page){
            case "1":
                history.push("/pages/test")
                break;
            case "2":
                history.push("/pages/test/bundleproducts")
                break;
            case "3":
                history.push("/pages/test/card")
                break;
        }
    }
    return(
        <div className="pagination">
            <span onClick ={pageSwitch} data-page ="1">Step 1</span>
            <span onClick ={pageSwitch} data-page ="2">Step 2</span>
            <span onClick ={pageSwitch} data-page ="3">Step 3</span>
        </div>
    )
}

export default Pagination