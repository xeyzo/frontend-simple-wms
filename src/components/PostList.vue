<template>
<div class="bg-gray-200 p-4">
  <h1><b>title:</b> {{ title }}</h1>
  <p><b>body:</b> {{ body }}</p>
</div>
</template>

<script>
export default {
    name:"PostList",
    props:["userId", "id", "title", "body"],
}
</script>