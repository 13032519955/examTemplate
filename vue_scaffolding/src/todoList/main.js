import "babel-runtime/regenerator"
import "./index.html"
import "./style.scss"

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import Vuex from  "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		arr:[1,2],
		removeArr:[]
		//唯一数据源
	},
	getters:{
		//获取属性的状态
		add(state){}
	},
	mutations:{
		//改变属性的状态 相当于 react的 reducer
		add(state,data){
			state.arr = [...state.arr,data];
		},
		remove(state,data){
			let removedata = state.arr.splice(state.arr.findIndex(value=>{
				return value === data
			}),1);
			state.removeArr = [...state.removeArr,...removedata];
			console.log(state.removeArr)
		}
	},
	actions:{
		//应用mutations 做异步处理
	}
})

new Vue({
	el:'#vueRoot',
	store,
	router,
	render:h=>h(App)
})
