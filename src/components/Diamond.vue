<template>
    <div id="diamond">
        <Star></Star>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #diamond {
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-bottom-color: yellow;
        position: relative;
        top: -50px;
    }
    #diamond:after {
        content: '';
        position: absolute;
        left: -50px;
        top: 50px;
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-top-color: yellow;
    }
</style>
