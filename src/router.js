import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tavern from "./views/Tavern.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tavern",
      name: "Tavern",
      component: Tavern
    }
  ]
});
