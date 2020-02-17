import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Home from "@/components/home";
import About from "@/components/about";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // { path: "", redirect: "/Home" },
    { path: "", name: "Home", component: Home },
    { path: "/About/:id/", name: "About", component: About }
  ],
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
