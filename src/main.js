import Vue from "vue";
import VueRouter from "vue-router";

// main app
import App from "./App.vue";

//import config
import routes from "./routes";

//style
import "@/assets/style/main.css";

// implementasi plugin/extension
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history",
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
