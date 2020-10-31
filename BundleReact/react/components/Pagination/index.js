import React from 'react'
import "./style.css"
import {useHistory} from "react-router-dom";

function Pagination(props) {
    const history = useHistory()
    function pageSwitch(event){
        switch (event.target.dataset.page){
            case "1":
                history.push(props.pageName)
                break;
            case "2":
                history.push(props.pageName+"/bundleproducts")
                break;
            case "3":
                history.push(props.pageName+"/card")
                break;
        }
    }

    function ActivePage(arg){
        let currentPage = location.href.slice(location.href.indexOf("/pages"))
        if (currentPage===arg){
            return true
        }
        else {
            return false
        }
    } 
    return(
        <div className="pagination">
            <span  className={`${ActivePage(props.pageName) ? 'pagActive' : 'pagNon'}`} onClick ={pageSwitch} data-page ="1">Step 1</span>
            <span  className={`${ActivePage(props.pageName+"/bundleproducts") ? 'pagActive' : 'pagNon'}`} onClick ={pageSwitch} data-page ="2">Step 2</span>
            <span className={`${ActivePage(props.pageName+"/card") ? 'pagActive' : 'pagNon'}`} onClick ={pageSwitch} data-page ="3">Step 3</span>
        </div>
    )
}

export default Pagination