<template>
	<header>
		<section>
			<span>ToDoList</span>
			<input type="text" placeholder="请输入" v-on:keyup.enter="fn">
		</section>
	</header>	
</template>

<script>
export default {
	name:"Header",
	methods:{
		fn(e){
			this.$store.commit("add",e.target.value)
			e.target.value = "";
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	header{
		width:100%;height:50px;
		text-align:center;
		background:rgba(0,0,0,.5);
		color:#333;
		&>section{
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
			font-size:24px;width:100%;height:100%;
			display:flex;justify-content:space-between;
			padding:0 10px;box-sizing:border-box;
			margin:0 auto;max-width:600px;
			align-items:center;
			&>span{padding-right:20px;}
			&>input{
				width:70%;
				border:0;height:56%;
				border-radius:10px;
				text-indent:5px;outline:none;
			}
		}
	}
</style>
