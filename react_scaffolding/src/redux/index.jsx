import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import homePage from "./homePage.jsx"   //首页的reducer
import other from "./other.jsx"         //其他逻辑的reducer

let middleware = ({getState}) => {
    return (dispatch) => {
        return (action) => {
           //根据action.type 或者 action.data 在这里做拦截  或者数据请求
            dispatch(action) //只有执行这一步才能正常运行
        };
    };
};
//redux三大原则 唯一数据源 state只读 只能用action接收之前的state返回新的state

let store = createStore(combineReducers({homePage,other}),applyMiddleware(reduxThunk,middleware));
export default store;