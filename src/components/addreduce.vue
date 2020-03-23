<template>
	<div id="addreduce">
		<p>{{count}}</p>
		<p>{{counts}}</p>
		<p>{{autochange}}</p>
		<button @click="add">增加</button>
		<button @click="reduce">减少</button>
		<button @click=waitadd>延迟增加</button>
	</div>

</template>

<script>
	import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
	export default{
		name:"addreduce",
		data() {
			return {
				
			}
		},
		methods:{
			...mapMutations("moduleA",["add","reduce"]),
			...mapActions("moduleA",["waitadd"])
		
		},
		computed:{
			...mapState("moduleA",["count"]),
			...mapState("moduleB",["counts"]),
			...mapGetters("moduleA",["autochange"])
		},
		mounted() {
			
		}
	}
</script>

<style>
	button {
		margin-right: 30px;
		margin-top: 20px;
	}
	p{
		margin: 80px 80px;
	}
</style>
