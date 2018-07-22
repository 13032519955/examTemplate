import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import "./css/wrap.scss"

//component
import Footer from "./component/footer.jsx"
import Section from "./component/section.jsx"
import ShowComponent from "./component/showComponent.jsx"

let footerNavData = [
    {name:"导航一",to:"/homePage/1"},
    {name:"导航一",to:"/homePage/2"},
    {name:"导航一",to:"/homePage/3"},
];
let liEle = footerNavData.map((value,index,originArr)=>{
    return (
        <li key={index}>
            <Link to={value.to}>
                {value.name}
            </Link>
        </li>
    )
})

ReactDom.render(
    <Router>
        <div className="wrap">
            <Section>
                <Route path="/homePage/:id" component={ShowComponent}/>
            </Section>
            <Footer>
                {liEle}
            </Footer>
        </div>
    </Router>,
    document.querySelector("#reactRoot")
)