<template>
  <div class="inbox-main-container">
    <h3 class="inbox-current-page">Current Page: {{ currentPage }} / {{rows/perPage}}</h3>
    <section>
      <b-table
        class="inbox-table-container"
        :items="this.messages"
        :per-page="perPage"
        :current-page="currentPage"
        hover
        :fields="fields"
        small
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

export default {
  name: "Inbox",
  data() {
    return {
      perPage: 20,
      currentPage: 1,
      fields: [
        {
          key: "from",
          label: "Sender Name"
        },
        {
          key: "title",
          label: "Message Title"
        },
        {
          key: "createdAt",
          label: "Date"
        },
        {
          key: "email",
          label: "Sender Mail"
        }
      ]
    };
  },
  computed: {
    ...mapState(["messages"]),
    rows() {
      // change name
      return this.messages.length;
    }
  },
  methods: {
    redirectToMessage(record) {
      return this.$router.push({ name: "message", params: { id: record.id } });
    }
  }
};
</script>

x