import SignIn from "./components/SignIn.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";



const routes = [
  { path: "/SignIn", component: SignIn },
  { path: "/Login", component: Login },
  { path: "/Dashboard", component: Dashboard }
];

export default routes;
