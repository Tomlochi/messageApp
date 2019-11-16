<template>
  <div id="app">
    <div class="app-continer">
      <nav class="app-nav">
        <img class="home-logo" src="./assets/home-icon.png" />
        <router-link class="app-home-link" to="/">Home</router-link>|
        <img class="mail-logo" src="./assets/mail-icon.png" />
        <router-link class="app-inbox-link" to="/inbox">Inbox</router-link>
      </nav>
    </div>
    <b-container class="footer-divider">
      <router-view />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { FETCH_MESSAGES } from "./store/actions.type";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Footer
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
