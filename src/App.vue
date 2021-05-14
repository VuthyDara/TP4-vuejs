<template>
  <div>
    I'm the root component
    <div id="root">
      <Triangle></Triangle>
      <Hexagon></Hexagon>
      <Heart></Heart>
      <Diamond></Diamond>
      <Star></Star>
      <Shape name="Triangle" color="blue"></Shape>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: auto;
    padding: 50px;
    border: 1px solid black;
    width: 800px;
    height: 400px;
    background-color: #9fc5f8;
  } 

  #root {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
</style>
