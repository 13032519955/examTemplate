<template>
    <section>
        <section v-on:click="remove">
             <div>显示区域:</div>
            <p v-for="(value,index) in storeDate" :key="index">
                <b>{{value}}</b>
                <span>删除</span>
            </p>
            <div>已删除:</div>
            <p v-for="(value,i) in removeData">
                {{value}}
             
            </p>
        </section>
    </section>
</template>
<script>
    export default {
        name:"Section",
        beforeMount(){
            console.log(this.$store.state.arr)
        },
        methods:{
            remove(e){
                if(e.target.nodeName === "SPAN"){
                    let text = e.target.previousElementSibling.innerHTML;
                    this.$store.commit("remove",text)
                }
                
            }
        },
        computed:{
            storeDate(){
                return this.$store.state.arr;
            },
            removeData(){
                return this.$store.state.removeArr;
            }
        }
        
    }
</script>
<style scoped lang="scss">
    section{
        flex:1;
        &>section{
            width:100%;height:100%;
            max-width:600px;font-weight:bold;
            margin:0 auto;padding:0 10px;box-sizing:border-box; 
            &>p{
                background:#fff;border-left:8px solid #629A9C;
                border-radius:4px;text-indent:6px;font-weight:400;
                margin:6px 0;display:flex;justify-content:space-between;
                padding-right:10px;
                padding:5px;color:#333;
                &>span{
                    cursor:pointer;
                }
            }
        }   
    }
</style>
