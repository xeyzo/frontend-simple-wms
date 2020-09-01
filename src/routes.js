import Home from "./pages/Home.vue";
import SignIn from "./components/SignIn.vue";
import Login from "./components/Login.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/SignIn", component: SignIn },
  { path: "/Login", component: Login }
  //   { path: "/user/:id", component: UserDetail },
];

export default routes;
