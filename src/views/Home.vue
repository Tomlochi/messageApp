<template>
  <div class="home-view-main-container">
    <h2>Welcome to Mailbox</h2>
    <b-card :title="cardText">
      <b-card-text>
        You have {{ getUnreadMessages.length }} unread messages out of
        {{ getMessages.length }}
      </b-card-text>
      <b-link @click="this.redirectToInbox" class="card-link">View Messages</b-link>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { FETCH_MESSAGES } from "../store/actions";
export default {
  name: "home",

  mounted() {
    this.$store.dispatch(FETCH_MESSAGES);
  },
  computed: {
    ...mapState(["user", "messages"]),
    ...mapGetters(["getMessages", "getUnreadMessages"]),
    cardText() {
      return "Hello " + this.user;
    }
  },
  methods: {
    redirectToInbox() {
      return this.$router.push("/inbox");
    }
  }
};
</script>
