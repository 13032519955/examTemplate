import {createStore} from 'redux';

let reducer=(state={alldata:[],checked:[]},action)=>{ 
    switch(action.type){
    case 'INITDATA': 
    {
        state.alldata=action.data;
        return {...state};
    } 
    case 'GETCHECK': 
    {
        return {...state};
    }      
    default:
        return {...state}; 
    }
};

let store = createStore(reducer);

export default store;