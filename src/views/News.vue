<template>
  <NavBar/>
  <div id="newsContainer" class="min-h-screen  flex justify-center items-center py-20">
    <div class="container mx-auto p-12  rounded-xl">
      <h1 class="text-4xl uppercase font-bold text-white from-current mb-8 text-center">Top headlines of the day</h1>
<!--      Passing the data from the child component to the parent component.-->
      <NewsForm @childToNewsParent="onChildClick($event)"/>

<!--       Passing the data from the parent component to the child component.-->
      <NewsResults :news-response="newsResponse"/>

    </div>
  </div>
  <FooterComponent/>

</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar";
import NewsForm from "@/components/NewsForm";
import NewsResults from "@/components/NewsResults";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "News-view",
  components: {FooterComponent, NewsResults, NewsForm, NavBar},
  data() {
    return {
      newsResponse: {},
      apikey: process.env.VUE_APP_NEWS_API_KEY,
      category: 'general',
      country: 'nl'

    }
  },
  methods: {

    // A method that is called when the child component emits an event and sets
    // country and category to the new value that is emitted from NewsForm component.
    onChildClick(value) {
      this.country = value.country;
      this.category = value.category;
      this.newsRequest();

    },
    // A method that is called when the child component emits an event and sets
    // country and category to the new value that is emitted from NewsForm component.
    newsRequest() {

      axios

          .get('https://newsapi.org/v2/top-headlines?country=' + this.country + '&category=' + this.category + '&apiKey=' + this.apikey, {
            'Content-type': 'application/xml',
          })
          .then((response) => {
            this.newsResponse = response.data;

          })

          .catch(function (error) {
            // handle error
            if (error.message === "Request failed with status code 429") {
              alert("Too much requests")
            } else if (error.message === "Request failed with status code 400") {
              alert("The request was unacceptable, often due to a missing or misconfigured")

            } else if (error.message === "Request failed with status code 401") {
              alert("Your API key was missing from the request, or wasn't correct.")

            } else if (error.message === "Request failed with status code 500") {
              alert("Something went wrong on our side.")

            }

          })
          .then(function () {

          });


    },

  },
  mounted() {
    this.newsRequest();
  }
}
</script>

<style scoped>

</style>