<template>
    <div>
        <h2 v-text="title"></h2>
    </div>
</template>

<script>
    export default {
        name: "hdNav",
        // 父组件传值
        props: ['title']
    }
</script>

<style scoped>

</style>