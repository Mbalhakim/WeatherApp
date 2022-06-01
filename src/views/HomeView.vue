<template>
  <NavBar/>

  <div id="homeContainer">


    <!--     Passing the value of the input field to the parent component.-->
    <WeatherForm @childToParent="onChildClick"/>
    <!--    A conditional rendering. It will only render if the weatherData.location is true.-->
    <h1 v-if="weatherData.location" class="text-4xl uppercase text-white from-current pt-8 mb-8 text-center">Current
      location {{ weatherData.location.name }}</h1>
    <GMapMap v-if="weatherData.location"
             :center="{lat:weatherData.location.lat, lng:weatherData.location.lon}"
             :zoom="14"
             style="height: 300px"

             class=" lg:w-9/12 md:w-9/12 sm:w-9/12  mx-auto p-5 ">

    </GMapMap>
    <div v-if="!weatherData.current" class="h-screen p-20">
      <div class="bg-white lg:w-6/12 md:w-9/12 sm:w-6/12 mx-auto p-10 rounded-2xl text-teal-600 font-bold text-center">
        Search the desired city <i class="fa-solid fa-hand-pointer"></i>
      </div>


    </div>

    <!--    Passing the value of the weatherData object to the WeatherResult component.-->
    <WeatherResult :weather-data="weatherData"/>

    <!--    Passing the value of the weatherData object to the ForecastResult component.-->
    <ForecastResult :weather-data="weatherData"/>

    <!--    Passing the value of the weatherData object to the CountryAstro component.-->
    <CountryAstro :weather-data="weatherData"/>

  </div>

  <FooterComponent/>

</template>
<style src="../assets/tailwind.css">

</style>

<script>
import NavBar from "@/components/NavBar";
import moment from "moment";
import axios from "axios";
import WeatherResult from "@/components/WeatherResult";
import ForecastResult from "@/components/ForecastResult";
import FooterComponent from "@/components/FooterComponent";
import WeatherForm from "@/components/WeatherForm";
import CountryAstro from "@/components/CountryAstro";


const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
export default {
  name: 'HomeView',
  data() {
    return {
      weatherData: {},
      qCity: '',
      coordinates: {
        lat: 0,
        lng: 0
      },
    }

  },

  components: {CountryAstro, WeatherForm, FooterComponent, ForecastResult, WeatherResult, NavBar},
  mounted() {


  },
  created() {

    // A function that is called when the component is created. It is using the `getLocation` method from the
    // `vue-browser-geolocation` package. It is getting the user's coordinates and then passing them to the `axiosRequest`
    // function.
    this.locationRequest()

  },
  methods: {

    // A method that is used to format the date and time.
    format_date(value) {
      if (value) {
        return moment(String(value)).format('dd')
      }
    },

    format_time(value) {
      if (value) {
        return moment(String(value)).format(' hh:mm a')
      }
    },
    // A method that is called when the `WeatherForm` component emits an event. It is passing the value of the input field
    // to the parent component.
    onChildClick(value) {
      this.qCity = value
      this.axiosRequest();
    },

    // Making an API call to the weather API.
    axiosRequest() {

      axios

          .get('http://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + this.qCity + '&days=1&aqi=no&alerts=no', {
            'Content-type': 'application/ld+json',
          })
          .then((response) => {
            this.weatherData = response.data;


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

    },

    // Getting the user's coordinates and then passing them to the `axiosRequest` function.
    locationRequest() {
      this.$getLocation({})
          .then(coordinates => {
            this.coordinates = coordinates
            this.qCity = `${this.coordinates.lat},${this.coordinates.lng}`;
            this.axiosRequest()
          })
          .catch(error => alert("Please turn on your location for better experience")|| console.log(error) )

    },


  },
  computed: {
    // Checking if the user's browser supports geolocation.
    canGeolocate() {
      return !!navigator.geolocation

    }

  },

}
</script>
