import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Inbox from "./views/Inbox.vue";
import Message from "./views/Message.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/inbox",
      name: "inbox",
      component: Inbox
    },
    {
      path: "/message/:id",
      name: "message",
      component: Message
    }
  ]
});
