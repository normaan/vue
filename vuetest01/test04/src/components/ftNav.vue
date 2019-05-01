<template>
    <div>
        <h2 v-text="tip"></h2>
    </div>
</template>

<script>
    export default {
        name: "ftNav",
        // 父组件传值
        props: ['tip']
    }
</script>

<style scoped>

</style>