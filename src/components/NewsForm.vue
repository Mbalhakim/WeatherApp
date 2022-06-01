<template>
  <!--  Listening for a submit event and then calling the axiosEmitRequest method.-->
  <form @submit.prevent="axiosEmitRequest"
        class="pt-2 py-5 relative lg:w-3/12 md:w-6/12 sm:w-9/12 bottom-0 right-0 mr-2 mb-3 mx-auto text-gray-600">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a country</label>
    <select v-model="country" id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="nl">The Netherlands</option>
      <option value="us">United States</option>
      <option value="jp">Japan</option>
      <option value="cn">China</option>
      <option value="ae">United Arab Emirates</option>
      <option value="ca">Canada</option>
      <option value="fr">France</option>
      <option value="de">Germany</option>
      <option value="at">Austria</option>
      <option value="au">Australia</option>
      <option value="be">Belgium</option>
      <option value="bg">Bulgaria</option>
      <option value="br">Brazil</option>
      <option value="ph">Philippines</option>
      <option value="pl">Poland</option>
      <option value="pt">Portugal</option>
      <option value="ro">Romania</option>
      <option value="rs">Serbia</option>
      <option value="ru">Russian Federation</option>
      <option value="sa">Saudi Arabia</option>
      <option value="se">Sweden</option>
      <option value="sg">Singapore</option>
      <option value="si">Slovenia</option>
      <option value="sk">Slovakia</option>
      <option value="th">Thailand</option>
      <option value="tr">Turkey</option>
      <option value="tw">Taiwan</option>
      <option value="ua">Ukraine</option>
      <option value="ve">Venezuela</option>
      <option value="za">South Africa</option>

    </select>

    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an category</label>
    <select v-model="category" id="categories"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="general">General</option>
      <option value="business">Business</option>
      <option value="entertainment">Entertainment</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
      <option value="technology">Technology</option>
    </select>
    <button type="submit"
            class="w-full mt-6 py-2  rounded bg-cyan-800 text-gray-100  focus:outline-none ">Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "NewsForm",
  data() {
    return {
      category: 'general',
      country: 'nl',

    }
  },
  methods: {

    // Emitting an object with the country and category to the parent component.
    axiosEmitRequest() {
      const emitCountryCategory = {
        'country': this.country,
        'category': this.category
      }
      this.$emit('childToNewsParent', emitCountryCategory)
    },

  },
}
</script>

<style scoped>

</style>