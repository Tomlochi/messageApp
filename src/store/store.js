import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { FETCH_MESSAGES } from "./actions.type";
import { SET_USER, SET_MESSAGES } from "./mutations.type";
Vue.use(Vuex);

const state = {
  user: "",
  messages: []
};

const mutations = {
  [SET_USER](state, newValue) {
    state.user = newValue;
  },
  [SET_MESSAGES](state, newValue) {
    state.messages = newValue;
  }
};

const getters = {
  getMessages(state) {
    return state.messages;
  },

  getUnreadMessages(state) {
    return state.messages.filter(msg => !msg.isRead);
  },
  getMessageById(state) {
    return id => state.messages.filter(msg => msg.id === id);
  }
};

const actions = {
  [FETCH_MESSAGES]({ commit }) {
    return axios
      .get("/db")
      .then(response => {
        const { user, messages } = response.data;
        commit(SET_USER, user.name);
        commit(SET_MESSAGES, messages);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
