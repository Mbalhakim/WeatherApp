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
             v-model="ChildCity"
             required>
    </div>
    <button type="submit"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Submit
    </button>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="printObject(syntaxHighlight())">Print Object
    </button>

  </form>

</template>

<script>
export default {
  name: "WeatherForm",
  data(){
    return{
      ChildCity: ''
    }
  },
}
</script>

<style scoped>

</style>