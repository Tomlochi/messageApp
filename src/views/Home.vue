<template>
  <div class="home-view-main-container">
    <h2>Welcome to Mailbox</h2>
    <b-card :title="cardText">
      <b-card-text>
        You have {{ getNumofUnreadMessages }} unread messages out of
        {{ getNumofMessages }}
      </b-card-text>
      <b-link href="#" class="card-link">View Messages</b-link>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      userName: "",
      messagesData: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/users").then(response => {
      this.userName = response.data[0].name;
      this.messagesData = response.data[0].messages;
    });
  },
  computed: {
    ...mapState(["user", "messages"]),
    getNumofMessages() {
      return this.messagesData.length;
    },
    getNumofUnreadMessages() {
      return this.messagesData.filter(msg => {
        return !msg.isRead;
      }).length;
    },
    cardText() {
      return "Hello " + this.userName;
    }
  }
};
</script>
