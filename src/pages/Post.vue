<template>
<div class="container mx-auto">
    <PostList v-for="post in postlist" :key="post.id" v-bind:title="post.title" v-bind:body="post.body"/>
</div>   
</template>

<script>
import PostData from "../dummy/post.json";
import PostList from "../components/PostList"

export default {
    name:"PostPage",
    components: {
      PostList
    },
    data(){
      return{
        postlist: PostData,
      };
    },
    created(){
    console.log("list", this.postlist)
    },
}
</script>