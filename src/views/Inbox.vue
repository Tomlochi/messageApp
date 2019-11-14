<template>
  <div class="overflow-auto">
    <p class="mt-3">Current Page: {{ currentPage }} / {{rows/perPage}}</p>

    <b-table
      class="inbox-table-container"
      :items="this.messages"
      :per-page="perPage"
      :current-page="currentPage"
      hover
      :fields="fields"
      small
      @row-clicked="myRowClickHandler"
    >
      <b-form-checkbox
        id="this.messages.id"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >I accept the terms and use</b-form-checkbox>
    </b-table>

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
    ...mapState(["user", "messages"]),
    rows() {
      return this.messages.length;
    }
  },
  methods: {
    myRowClickHandler(record) {
      alert(record);
      // 'record' will be the row data from items
      // `index` will be the visible row number (available in the v-model 'shownItems')
    }
  }
};
</script>
