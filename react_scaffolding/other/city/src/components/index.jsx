import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Style from '../css/app';
import axios from 'axios';
import {connect} from 'react-redux';
class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            alldata:''
        };
    }
    render() {
        let listdata=this.props.listdata;  
        return (
            <div className={Style.home}>
                <header> 
                    <u>
                        <Link to='/citylist'>北京市</Link>
                        <i className='icon iconfont icon-xiangxia'></i> 
                    </u> 
                    <em className='icon iconfont icon-fangdajing'></em>    
                </header>
            </div>
        );
    };
    componentWillMount(){
        axios.get('/api/data').then((res)=>{
            this.props.alldata(res.data);
        });
    }
};
let mapStateToProps=(state)=>{
    return {
        listdata:state.alldata
    };
};
let mapDispatchToProps=(dispatch)=>{
    return {
        alldata(data){
            dispatch({type:'INITDATA',data});
        }
    };
};
let Indexe=connect(mapStateToProps,mapDispatchToProps)(Index);
export default Indexe;