import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import HomePage from "./component/homePage.jsx"
import store from "./redux/index.jsx"

store.subscribe(()=>{console.log("监控")})

ReactDom.render(
    <Router>
        <Route path="/" component={HomePage}/>
    </Router>,
    document.querySelector("#reactRoot")
)