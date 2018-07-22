import React from "react"
import "../css/footer.scss"

export default class extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <footer className="footer">
               <ul className="ul">
                  {this.props.children}
               </ul>
            </footer>
        )
    }
};