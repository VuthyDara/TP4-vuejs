<template>
    <div :class='color'>
        
    </div>
</template>

<script>
    export default {
        props: ['color']
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        position: relative;
        width: 100px;
        height: 90px;
    }
    div:before,
    div:after {
        position: absolute;
        content: "";
        left: 50px;
        top: 0;
        width: 50px;
        height: 80px;
        background: green;
        border-radius: 50px 50px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    div:after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
</style>
