<template>
  <div>{{$route.params.id}}</div>
</template>

<script>
import users from "../../dummy/users";
export default {
  name: "UserDetail",
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
    setTimeout(() => {
      this.$router.push({ name: `user/detail/${4}` });
    }, 5000);
  },
};
</script>