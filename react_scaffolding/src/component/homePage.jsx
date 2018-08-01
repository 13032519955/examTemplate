import React from "react"
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom"


let home = ()=>{
    return <Link to="/aa">asf</Link>
}
let aa = ()=>{
    return <div>sdfsfd </div>
}
export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return(
            <Switch>
                <Route exact path="/" component={home}/>
                <Route exact path="/aa" component={aa}/>
            </Switch>
        )
    }
}