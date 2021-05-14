<template>
    <div id="hexagon">
        <Heart></Heart>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                color: "blue"
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #hexagon {
        width: 100px;
        height: 57.735px;
        background: blue;
        position: relative;
    }
    #hexagon::before {
        content: "";
        position: absolute;
        top: -28.8675px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 28.8675px solid blue;
    }
    #hexagon::after {
        content: "";
        position: absolute;
        bottom: -28.8675px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 28.8675px solid blue;
    }
</style>
