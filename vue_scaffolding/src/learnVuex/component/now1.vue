<template>
	<div class="now1">
        <h3>项目列表1</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>{{$store.state.str}}</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style scaffold lang="scss">
	.now1{
        width:100%;height:180px;
		background:#FFF8B1;flex-shrink:0;
        box-shadow: 0px 4px 9px -2px #ccc;
        padding:20px;
        &>ul{
            display:flex;
            width:100%;height:60px;margin:10px 0;
            flex-wrap:wrap;justify-content:flex-start;
            &>li{
                width:160px;height:100%;
                background:#FFFDE8;padding:0 10px;
                margin-right:10px;line-height:60px;
            }
        }
	}
</style>
