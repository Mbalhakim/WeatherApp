<template>

  <form @submit.prevent="axiosRequest" class="">
    <div class="">
      <input class="shadow appearance-none border
          rounded w-full
           py-2 px-3 text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline"
             type="text"
             name="City"
             id="pwd"
             placeholder="City"
             v-model="qCity"
             required>
    </div>
    <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="printObject(syntaxHighlight())">Print Object</button>

  </form>



  <form class="w-full max-w-sm">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Sign Up
      </button>
      <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "WeatherForm"
}
</script>

<style scoped>

</style>