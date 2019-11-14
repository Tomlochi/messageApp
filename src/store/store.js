import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { FETCH_MESSAGES } from "./actions";
import { SET_USER, SET_MESSAGES } from "./mutations";
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
    return state.messages.filter(msg => {
      return !msg.isRead;
    });
  }
};

const actions = {
  [FETCH_MESSAGES]({ commit }) {
    return axios
      .get("http://localhost:3000/users")
      .then(response => {
        commit(SET_USER, response.data[0].name);
        commit(SET_MESSAGES, response.data[0].messages);
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
