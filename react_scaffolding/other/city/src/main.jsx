import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Router from './router/index';
import store from './store/index';
import stores from './store/store.js';
console.log(store);
let render = ()=>{
    ReactDom.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.querySelector('#root')
    );
     
};
render();
stores.subscribe(render);