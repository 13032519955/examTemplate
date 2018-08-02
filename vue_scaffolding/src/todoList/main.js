// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./style.scss"
import Vuex from  "vuex"

Vue.use(Vuex);
console.log(Vuex);
const store = new Vuex.Store({
	state:{
		arr:[],
		removeArr:[]
		//唯一数据源
	},
	getters:{
		//获取属性的状态
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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
