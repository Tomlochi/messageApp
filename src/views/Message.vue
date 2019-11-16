<template>
  <div class="message-main-container">
    <section>
      <h2>Message</h2>
      <div class="message-content">
        <span class="message-header">Message Title :</span>
        <span class="message-data">{{this.message.header }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Message Content :</span>
        <span class="message-data">{{this.message.content }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Sender :</span>
        <span class="message-data">{{this.message.sender }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Sender Mail :</span>
        <span class="message-data">{{this.message.email }}</span>
      </div>
      <div class="message-content">
        <span class="message-header">Date :</span>
        <span class="message-data">{{this.message.date }}</span>
      </div>
      <div class="message-delete">
        <b-button variant="primary">Delete Message</b-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: Object
    };
  },
  mounted() {
    this.message = this.$store.getters.getMessageById(this.$route.params.id)[0];
  }
};
</script>