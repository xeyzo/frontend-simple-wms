<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg ml-8 mt-8">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sign In</div>
  </div>
<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-6 md:mb-0 ml-8 mr-8">
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " v-model="full_name" id="grid-first-name" type="text" placeholder="fullname">
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="username" id="grid-first-name" type="text" placeholder="username">
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="password" id="grid-password" type="password" placeholder="******************">
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" v-model="phone_number" type="text" placeholder="phone number">
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" v-model="email" type="text" placeholder="example@mail.com">
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Sign In
      </button>
    </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
  </div>
</form>
</div>
</template>

<script>
export default {
  name:"SignIn",
  data(){
  return{  
      full_name:"",
      username:"",
      email:"",
      phone_number:"",
      password:""
    }
  }
}
</script>