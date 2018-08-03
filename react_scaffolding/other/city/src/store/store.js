import * as Redux from 'redux';
let stores = Redux.createStore((state=['北京市'],action)=>{
    if(action.type === 'toggle'){
        if(state.includes(action.data)){
            state.splice(state.findIndex((value,index,originArr)=>{
                return value === action.data;
            }),1);
            return state;
        }else{
            state.push(action.data);
            return state;
        }
    };
    return state;
});
export default stores;