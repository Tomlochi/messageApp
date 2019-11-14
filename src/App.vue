<template>
  <div id="app">
    <div class="app-continer">
      <img class="medallia-logo" src="./assets/medallia-logo.png" @click="this.rederictToMedallia" />
      <nav class="app-nav">
        <mdb-icon icon="camera-retro" />
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
import { FETCH_MESSAGES } from "../src/store/actions.type";
export default {
  name: "app",
  methods: {
    rederictToMedallia() {
      window.location = "https://www.medallia.com";
    }
  },
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
