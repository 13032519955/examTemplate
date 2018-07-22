import React from "react"
import "../css/section.scss"

export default class extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <section className="section">
                中部
                {this.props.children}
            </section>
        )
    }
};