import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Style from '../../css/app';
import {connect} from 'react-redux';

import stores from '../../store/store.js';
console.log(stores.getState());
class Citylist extends Component {
    render() { 
        let citylist=this.props.citylist; 
        let el = stores.getState().map((value,index)=>{
            return <li key={index} onClick={this.click.bind(this)}>{value}</li>;
        });
        return (
            <div className={Style.list}>
                <header>  
                    <i className='icon iconfont icon-xiangzuo'></i> 
                    <u>|</u>     
                    <Link to='/index'>选择城市</Link>  
                </header>
                <section>
                    <h4>
                        <b>您的上牌地址</b>
                        <u>
                            <Link to='/address'>北京市</Link>
                            <i className='icon iconfont icon-youjiantou-01'></i> 
                        </u> 
                    </h4>
                    <div className={Style.top}>
                        <b>您已选择的城市</b>
                        <ul className={Style.ulDom}>
                            {el}
                        </ul>
                        <div className={Style.list}> 
                            {
                                citylist && citylist.map((item,key)=>{
                                    return <div key={key} className={Style.small}>
                                        <h5>{item.letter}</h5>
                                        <ul>
                                            {
                                                item.city.map((i,index)=>{
                                                    return <li key={index} onClick={this.click.bind(this)}>{i.name}</li>;
                                                })
                                            }
                                        </ul>
                                    </div>;
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    click(ev,index){
        let realDom = ev.target.innerHTML;
        stores.dispatch({type:'toggle',data:realDom});
    };
};
let mapStateToprops=(state)=>{  
    return {
        citylist:state.alldata
    };
};
let mapDispatchToprops=(dispatch)=>{
    return {
        checked(key){
            dispatch({type:'GETCHECK',key});
        }
    };
};
let Citylistc=connect(mapStateToprops,mapDispatchToprops)(Citylist);
export default ()=><Route path='/citylist' component={Citylistc}/>;