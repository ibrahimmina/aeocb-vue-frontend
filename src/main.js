import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import Create from "./components/Create.vue";
import Edit from "./components/Edit.vue";
import Index from "./components/Index.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: "Create",
    path: "/create",
    component: Create
  },
  {
    name: "Edit",
    path: "/edit",
    component: Edit
  },
  {
    name: "Index",
    path: "/index",
    component: Index
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
