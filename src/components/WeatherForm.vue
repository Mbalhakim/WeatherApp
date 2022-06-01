<template>

  <!--  Preventing the default action of the form, which is to reload the page
   and listening for a submit event and then calling the axiosEmitRequest method.-->
  <form @submit.prevent="axiosEmitRequest" class="pt-2 relative lg:w-4/12 md:w-6/12 sm:w-9/12 mx-auto text-gray-600 ">

    <input class="shadow appearance-none border
                    text-center
                    rounded w-full
                    py-2 px-3 text-slate-900 leading-tight
                    focus:outline-none focus:shadow-outline"
           type="text"
           name="City"
           id="pwd"
           placeholder="City, country, coordinates"
           v-model="qCity"
           required>
    <i class="fa-solid fa-magnifying-glass-location absolute left-0 top-0 mt-5 ml-4 cursor-pointer"></i>
    <button type="submit"
            class="p-2  bg-slate-900 text-green-300 font-bold focus:outline-none absolute right-0 top-0 mt-2 mr-0">
      Search
    </button>


  </form>

</template>

<script>
export default {
  name: "WeatherForm",
  data() {
    return {

      qCity: ''
    }
  },
  methods: {

    // Emitting the event `childToParent` and passing the value of `qCity` to the parent component.
    axiosEmitRequest() {
      this.$emit('childToParent', this.qCity)

    },

  },
}
</script>

<style scoped>

</style>