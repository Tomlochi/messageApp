<template>
  <div class="message-main-container">
    <section>
      <div v-if="this.loader">
        <b-spinner class="message-spinner" variant="primary"></b-spinner>
      </div>
      <h2>Message</h2>
      <div class="message-content">
        <span class="message-header">Message Title :</span>
        <span class="message-data">{{ this.message.header }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Message Content :</span>
        <span class="message-data">{{ this.message.content }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Sender :</span>
        <span class="message-data">{{ this.message.sender }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Sender Mail :</span>
        <span class="message-data">{{ this.message.email }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Date :</span>
        <span class="message-data">{{ this.message.date }}</span>
      </div>
      <div class="message-delete">
        <b-button v-b-modal.modal-delete variant="primary"
          >Delete Message</b-button
        >

        <b-modal id="modal-delete" @ok="deleteMessage" title="Delete Message">
          <p class="my-4">Are you sure you want to delete this message</p>
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
import { DELETE_MESSAGE, FETCH_MESSAGE_BY_ID } from "../store/actions.type";
export default {
  name: "Message",
  data() {
    return {
      message: {},
      loader: "true"
    };
  },
  mounted() {
    this.loader = true;
    this.$store
      .dispatch(FETCH_MESSAGE_BY_ID, this.$route.params.id)
      .then(response => {
        this.message = response;
        this.loader = false;
      });
  },
  methods: {
    deleteMessage() {
      this.$store.dispatch(DELETE_MESSAGE, this.message).then(() => {
        return this.$router.push("/inbox");
      });
    }
  }
};
</script>
