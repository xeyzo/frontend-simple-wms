import Home from "./pages/Home.vue";
import Post from "./pages/Post.vue";
import Photo from "./pages/Photo.vue";
import Album from "./pages/Album.vue";
import SignIn from "./components/SignIn.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/post", component: Post },
  { path: "/photo", component: Photo },
  { path: "/SignIn", component: SignIn },
  { path: "/album", component: Album }
  //   { path: "/user/:id", component: UserDetail },
];

export default routes;
