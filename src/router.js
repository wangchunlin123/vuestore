import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
import addreduce from "./components/addreduce.vue"
export default new Router({
	routes:[{
		path:"/",
		name:"addreduce",
		component:addreduce
	}]
})