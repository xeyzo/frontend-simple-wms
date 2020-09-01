<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg md:w-1/3 m-4 p-6">
  <img class="w-full" v-bind:src='url' alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{title}}</div>
  </div>
</div>
</template>

<script>
export default {
    name:"PhotoCard",
    props:["id", "title", "url", "thumbnailUrl"],
}
</script>