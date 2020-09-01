<template>
  <div>
    <h1>User page Index</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import users from "../../dummy/users";
export default {
  name: "user Index",
  data() {
    return {
      list: users,
      message: "halo",
    };
  },
  created() {
    console.log("user detail created");
    // this.list = users;
    // console.log("m", { m: this.message, users });
  },
};
</script>