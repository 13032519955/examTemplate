<template>
	<div id="app">
		<Now1></Now1>
		<Now2></Now2>
	</div>
</template>

<script>
	import Now1 from "./component/now1.vue"
	import Now2 from "./component/now2.vue"

	export default {
		name: 'App',
		components:{
			Now1,Now2
		}
	}
</script>

<style scaffold lang="scss">
	#app{
		width:100%;height:100%;
		display:flex;flex-direction:column;
	}
</style>
