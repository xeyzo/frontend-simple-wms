<template>
  <div class="container mx-auto">
      <div class='flex flex-wrap'>
          <PhotoCard v-for='book in booklist' :key='book.id' v-bind:title="book.title" v-bind:url="book.thumbnailUrl" />
      </div>
    </div>
</template>

<script>
import PhotoData from "../dummy/photo.json";
import PhotoCard from "../components/PhotoCard"

export default {
    name:"PhotoPage",
    components: {
      PhotoCard
    },
    data(){
      return{
        booklist: PhotoData,
      };
    },
    created(){
    console.log("list", this.booklist)
    },
}
</script>