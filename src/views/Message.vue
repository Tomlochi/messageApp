<template>
  <div class="message-main-container">
    <section>
      <span v-if="message">{{this.message.content}}</span>
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
    this.message = this.$store.getters.getMessageById(this.$route.params.id);
  }
};
</script>