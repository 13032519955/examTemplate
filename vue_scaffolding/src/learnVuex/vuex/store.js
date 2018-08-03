import Vue from "vue"
import Vuex from "vuex"
/*
    vuex包含的方法:
        Store()
        createNamespacedHelpers();
        install();
        mapActions([]);
        mapGerrers([]);
        mapMutations([]);
        mapState([]);
*/
Vue.use(Vuex);
console.log(Vuex)
export const store = new Vuex.Store({
    state:{
        str:"封装vuex"
    },
    getters:{

    },
    mutations:{

    },
    actions:{

    }
})
