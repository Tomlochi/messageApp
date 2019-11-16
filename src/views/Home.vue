<template>
  <section>
    <div class="home-view-main-container">
      <h2>Welcome to Mailbox</h2>
      <b-card class="card-container" :title="cardText">
        <b-card-text>
          You have {{ getUnreadMessages.length }} unread messages out of
          {{ getMessages.length }}
        </b-card-text>
        <b-link @click="this.redirectToInbox" class="card-link"
          >View Messages</b-link
        >
      </b-card>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getMessages", "getUnreadMessages"]),
    cardText() {
      return `Hello ${this.user}`;
    }
  },
  methods: {
    redirectToInbox() {
      return this.$router.push("/inbox");
    }
  }
};
</script>
