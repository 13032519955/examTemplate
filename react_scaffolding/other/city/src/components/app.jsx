import React, { Component } from 'react';
import Style from '../css/app';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            address:''
        };
    }
    render() {
        return (
            <div className={Style.app}>
                {this.props.children}
            </div>
        );
    };
};
export default App;