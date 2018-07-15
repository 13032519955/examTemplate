import React from "react"

//style
import "./css/wrap.scss"

//component
import Header from "./component/header.jsx"
import Section from "./component/section.jsx"
import Footer from "./component/footer.jsx"

export default class extends React.Component {
    constructor(props){
        super(props)
    };
    render(){
        return(
            <div className="wrap">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}