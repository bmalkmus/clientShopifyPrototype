import React from 'react'
import "./style.css"
import {useHistory} from "react-router-dom";

function Pagination(props) {
    const history = useHistory()
    function pageSwitch(event){
        switch (event.target.dataset.page){
            case "1":
                history.push("/pages/"+props.pageName)
                break;
            case "2":
                history.push("/pages/"+props.pageName+"/bundleproducts")
                break;
            case "3":
                history.push("/pages/"+props.pageName+"/card")
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