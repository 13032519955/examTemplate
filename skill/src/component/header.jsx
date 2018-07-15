import React from "react"
import "../css/header.scss"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

class Children extends React.Component {
    constructor(props){
        super(props)
    };
    render(){
        console.log(this.props)
        return (
            <p>路由路由跳转{this.props.match.params.leo}</p>
        )
    }
};

export default class extends React.Component {
    constructor(props){
        super(props)
    };
    render(){
        return (
            <Router>
                <header>
                    <Link to="/nav1/德玛西亚">导航一</Link>
                    <Route path="/nav1/:leo"   component={Children}/>
                </header>
            </Router>
        )
    }
}