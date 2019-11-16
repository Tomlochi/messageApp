import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  FETCH_MESSAGES,
  UPDATE_ISREAD_MESSAGE,
  DELETE_MESSAGE,
  FETCH_MESSAGE_BY_ID
} from "./actions.type";
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
    const UnreadMessages = newValue.filter(msg => !msg.isDeleted);
    state.messages = UnreadMessages;
  }
};

const getters = {
  getMessages(state) {
    return state.messages.filter(msg => !msg.isDeleted);
  },

  getUnreadMessages(state) {
    return state.messages.filter(msg => !msg.isRead);
  }
};

const actions = {
  [FETCH_MESSAGES]({ commit }) {
    return axios.get("/db").then(response => {
      const { user, messages } = response.data;
      commit(SET_USER, user.name);
      commit(SET_MESSAGES, messages);
    });
  },
  [UPDATE_ISREAD_MESSAGE]({ commit }, message) {
    const { id } = message;
    message.isRead = true;
    return axios.put(`/messages/${id}`, message).then(() => {
      axios.get("/messages").then(response => {
        commit(SET_MESSAGES, response.data);
      });
    });
  },
  [DELETE_MESSAGE]({ commit }, message) {
    const { id } = message;
    message.isDeleted = true;
    return axios.put(`/messages/${id}`, message).then(() => {
      axios.get("/messages").then(response => {
        commit(SET_MESSAGES, response.data);
      });
    });
  },
  [FETCH_MESSAGE_BY_ID](context, messageId) {
    return axios.get(`/messages/${messageId}`).then(response => {
      return response.data;
    });
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
