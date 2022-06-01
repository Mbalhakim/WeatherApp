<template>
  <NavBar/>
    <p v-if="sportsResponse.football" class="text-lg text-center font-bold m-5">Football Matches of today</p>
    <table v-if="sportsResponse.football" class=" lg:rounded-t-lg m-5 w-3/6 mx-auto text-gray-100 bg-gradient-to-l from-slate-800 to-slate-900">
      <tr class="text-left text-green-400 border-b-2 border-indigo-300">
        <th class="lg:px-4 lg:py-3">Match</th>
        <th class="lg:px-4 lg:py-3">Tournament</th>
        <th class="lg:px-4 lg:py-3">Start</th>
        <th class="lg:px-4 lg:py-3">Stadium</th>
        <th class="lg:px-4 lg:py-3">Country</th>


      </tr>
      <tr class="border-b border-indigo-400"  v-for="(footbal, index) in sportsResponse.football" :key="index">
        <td class="lg:px-4 lg:py-3">{{footbal.match}}</td>
        <td class="lg:px-4 lg:py-3">{{footbal.tournament}}</td>
        <td class="lg:px-4 lg:py-3">{{footbal.start}}</td>
        <td class="lg:px-4 lg:py-3">{{footbal.stadium}}</td>
        <td class="lg:px-4 lg:py-3">{{footbal.country}}</td>
      </tr>

    </table>

    <p v-if="sportsResponse.golf" class="text-lg text-center font-bold m-5">Golf Matches of today</p>
    <table v-if="sportsResponse.golf" class=" lg:rounded-t-lg m-5 w-3/6 mx-auto text-gray-100 bg-gradient-to-l from-slate-800 to-slate-900">
      <tr class="text-left text-green-400 border-b-2 border-indigo-300">
        <th class="lg:px-4 lg:py-3">Match</th>
        <th class="lg:px-4 lg:py-3">Tournament</th>
        <th class="lg:px-4 lg:py-3">Start</th>
        <th class="lg:px-4 lg:py-3">Stadium</th>
        <th class="lg:px-4 lg:py-3">Country</th>


      </tr>
      <tr class="border-b border-indigo-400"  v-for="(golf, index) in sportsResponse.golf" :key="index">
        <td class="lg:px-4 lg:py-3">{{golf.match}}</td>
        <td class="lg:px-4 lg:py-3">{{golf.tournament}}</td>
        <td class="lg:px-4 lg:py-3">{{golf.start}}</td>
        <td class="lg:px-4 lg:py-3">{{golf.stadium}}</td>
        <td class="lg:px-4 lg:py-3">{{golf.country}}</td>
      </tr>

    </table>

  <FooterComponent />
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";
import FooterComponent from "@/components/FooterComponent";
const  apiKey = process.env.VUE_APP_WEATHER_API_KEY;
export default {
  name: "SportsView",
  components: {FooterComponent, NavBar},
  data() {
    return {

      sportsResponse: {},
      qCity:'netherlands'
    }
  },
  methods:{
    axiosRequest() {

      axios

          .get('http://api.weatherapi.com/v1/sports.json?key=' + apiKey + '&q=' + this.qCity, {
            'Content-type': 'application/ld+json',
          })
          .then((response) => {
            this.sportsResponse = response.data;


          })

          .catch(function (error) {
            // handle error
            if (error.message === "Request failed with status code 403") {
              alert("API key has exceeded calls per month quota")
            } else if (error.message === "Request failed with status code 400") {
              alert("No location found matching parameter, often due to a missing or mistyped city or country")

            } else if (error.message === "Request failed with status code 401") {
              alert("Your API key was missing from the request, or wasn't correct.")

            } else if (error.message === "Request failed with status code 500") {
              alert("Something went wrong on our side.")

            }

          })
          .then(function () {

          });

    },  },
  mounted() {
    this.axiosRequest();
  }
}
</script>

<style scoped>

</style>