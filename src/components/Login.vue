<template>
<div class="w-full max-w-xs ml-8 mt-8">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Login</div>
  </div>
    <div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
          Login
      </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
    name:"Login",
}
</script>