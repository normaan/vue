<template>
    <div class="hello">
        <hd-nav title="头部导航"></hd-nav>
        <h1>index 页面</h1>
        <button @click="callA"> B-> 子组件 </button>
        <ft-nav :tip="text"></ft-nav>

    </div>
</template>

<script>
    import connect from './call/connector'
    export default {
        name: 'index',
        data() {
            return {
                text:'底部导航'
            }
        },
        methods:{
            callA(){
                connect.$emit('phone','子组件和父组件通信');
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    a {
        color: #42b983;
    }
</style>
