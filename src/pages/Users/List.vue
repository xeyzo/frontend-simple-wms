<template>
  <div>
    User page
    {{message}}
    <ul>
      <li v-for="(user, i) in list" :key="i">
        <router-link :to="'/user/detail/'+user.id">{{user.name}} - {{user.id}}</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import users from "../../dummy/users";
export default {
  name: "UserPage",
  data() {
    return {
      list: [],
      message: "halo",
    };
  },
  created() {
    console.log("user created");
    this.list = users;
    // console.log("m", { m: this.message, users });
  },
};
</script>