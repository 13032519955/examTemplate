import "babel-runtime/regenerator"
import "./index.html"
import "./css/style.scss"
import "./js/script.js"
//vue
import Vue from "vue"
import App from "./App.vue"
import {store} from "./vuex/store.js"

new Vue({
    el:"#vueRoot",
    store,
    render:h=>h(App)
})