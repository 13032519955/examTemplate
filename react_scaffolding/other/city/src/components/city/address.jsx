import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import Style from '../../css/app';
import {connect} from 'react-redux';
class Address extends Component {
    render() {
        return (
            <div className={Style.address}>
                <header>  
                    <i className='icon iconfont icon-xiangzuo'></i> 
                    <u>|</u>     
                    <Link to='/index'>选择上牌城市</Link>  
                </header>
            </div>
        );
    }
}

let mapStateToprops=(state)=>{  
    return {
        
    };
};

let mapDispatchToprops=(dispatch)=>{
    return {
         
    };
};
let Addressa=connect(mapStateToprops,mapDispatchToprops)(Address);
export default ()=><Route path='/address' component={Addressa}></Route>;