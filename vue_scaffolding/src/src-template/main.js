import "babel-runtime/regenerator"
import "./index.html"
import "./css/style.scss"
import "./js/script.js"
//vue
import Vue from "vue"
import App from "./App.vue"

new Vue({
    el:"#vueRoot",
    render:h=>h(App)
})