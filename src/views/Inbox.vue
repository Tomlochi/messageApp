<template>
  <div class="inbox-main-container">
    <h3 class="inbox-current-page">Current Page: {{ currentPage }} / {{rows/perPage}}</h3>
    <section>
      <b-table
        class="inbox-table-container"
        hover
        small
        :items="this.messages"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        :tbody-tr-class="markUnreadMessage"
        @row-clicked="redirectToMessage"
      ></b-table>
    </section>
    <b-pagination
      class="inbox-pagination"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { inboxData } from "../consts/pagesData";

export default {
  name: "Inbox",
  data() {
    return inboxData;
  },
  computed: {
    ...mapState(["messages"]),
    rows() {
      return this.messages.length;
    }
  },
  methods: {
    redirectToMessage(record) {
      return this.$router.push({ name: "message", params: { id: record.id } });
    },
    markUnreadMessage(message) {
      if (!message.isRead) return "unread-message";
    }
  }
};
</script>

