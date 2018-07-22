import React from "react"
import {store} from "../redux"

store.dispatch({type:"add",data:"加油啊"})
export default class extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <div>
                显示{this.props.match.params.id}
                {store.getState()}
            </div>
        )
    }
};