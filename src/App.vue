<template>
  <div id="app">
    <div class="container mx-auto">
      <h1>Jumbotron</h1>
      <ul class="flex nav">
        <li class="mr-6">
          <router-link to="/SignIn" exact>SignIn</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/Login" exact>Login</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/Dashboard" exact>Dashboard</router-link>
        </li>
      </ul>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <!-- <hr /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav li a {
  /* @apply bg-blue-700; */
  @apply text-blue-500;
  /* @apply hover:text-blue-800; */
}
.nav li a:hover {
  @apply text-red-800;
}

.nav li a.router-link-active {
  @apply text-green-800;
}
</style>
