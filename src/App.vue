<template>
  <div id="app">
    <div class="navigation">
      <router-link tag="span" exact active-class="active" to="/">Home</router-link>
      <router-link
        tag="span"
        active-class="active"
        :to="{name: 'About', params: {id: Math.floor(Math.random()*10)} }"
      >About</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style scoped>
.navigation {
  background-color: #000;
  color: #FFF;
}

.navigation > span {
  padding: 0px 10px;
  font-size: 1.2em;
  display: inline-block;
  cursor: pointer;
  line-height: 50px;
}

.navigation > span:hover,
.navigation > span.active {
  background-color: #ffffffaa;
}

.content {
  margin: 20px auto;
  width: 70%;
  background-color: #0000000f;
  min-height: calc(100vh - 90px);
  padding: 20px;
  box-sizing: border-box;
}
</style>
