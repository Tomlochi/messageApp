<template>
  <div id="app">
    <div class="app-continer">
      <img class="medallia-logo" src="./assets/medallia-logo.png" />
      <div class="app-nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/inbox">Inbox</router-link>
      </div>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
