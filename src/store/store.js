import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    messages: []
  },
  mutations: {
    setUser: (state, newValue) => {
      state.user = newValue;
    },
    setMessages: (state, newValue) => {
      state.messages = newValue;
    }
  },
  getters: {},
  actions: {
    getMessageData({ commit }) {
      axios
        .get("http://localhost:3000/users")
        .then(response => {
          commit("setUser", response.data[0].name);
          commit("setMessages", response.data[0].messages);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }
});
