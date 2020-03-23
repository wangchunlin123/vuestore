import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import moduleA from "./store/moduleA/store.js"
import moduleB from "./store/moduleB/store.js"
export default new Vuex.Store({
	modules:{moduleA,moduleB}
})
