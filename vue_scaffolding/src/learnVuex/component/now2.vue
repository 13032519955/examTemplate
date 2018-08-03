<template>
    <div class="now2">
        <h3>项目列表2</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style scaffold lang="scss">
	.now2{
        background:#D1E4FF;flex:1;margin-top: 16px;
        padding:20px;padding-right:0;
        &>ul{
            
            width:100%;height:100%;margin:10px 0;
            
            &>li{
                background:#F1F7FF;padding:0 10px;
                line-height:60px;margin-bottom:10px;
            }
        }
	}
</style>
