const state = {
	count: 0,
}
const mutations={
	add(state){
		state.count+=1
	},
	reduce(state){
		state.count-=1
	},
}
const actions={
	waitadd(context){
		setTimeout(()=>{
			context.state.count+=10
		}, 3000);
	}
}
const getters={
	autochange(state){
		 return state.count+100
	}
}
export default {
	namespaced: true,
	state,mutations,actions,getters
}