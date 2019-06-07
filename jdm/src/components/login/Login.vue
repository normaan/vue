<template>
    <div class="login">
        <!--公共标题-->
        <button @click="callback"><</button>
        京东登录

    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            callback() {

            }
        }
    }
</script>

<style scoped lang="less">
    @rem: 64rem;

    .login {
        width: 100%;
        height: 100%;
        background-color: white;
    }

</style>