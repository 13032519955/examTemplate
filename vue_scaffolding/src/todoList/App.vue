<template>
  <div id="app">
	  <Header></Header>
	  <Section></Section>
  </div>
</template>

<script>
	import Header from "./components/header.vue"
	import Section from "./components/section.vue"
	export default {
		name: 'App',
		components:{
			Header,Section
		}

	}
</script>

<style scoped lang="scss">
	#app{
		width:100%;height:100%;
		background:#ccc;display:flex;flex-direction:column;
	}
</style>
