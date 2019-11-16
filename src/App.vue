<template>
  <div id="app">
    <div class="app-continer">
      <nav class="app-nav">
        <!-- <img src="./assets/home-icon.jpg" /> -->
        <router-link class="app-home-link" to="/">Home</router-link>|
        <router-link class="app-inbox-link" to="/inbox">Inbox</router-link>
      </nav>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { FETCH_MESSAGES } from "./store/actions.type";
export default {
  name: "app",

  mounted() {
    this.$store.dispatch(FETCH_MESSAGES);
  }
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
