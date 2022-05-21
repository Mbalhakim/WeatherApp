<template>
  <div>

    <NavBar />
    <WeatherForm />


    <WeatherResult v-if="weatherData.location" />


    <div>
    </div>

    <div v-for="(forecast, index) in weatherData.forecast" :key="index">
      <pre>{{forecast[0].astro}}</pre>

    </div>
  </div>


</template>
<style src="../assets/tailwind.css">

</style>

<script>
import NavBar from "@/components/NavBar";
import WeatherResult from "@/components/WeatherResult";


import moment from "moment";
import axios from "axios";
import WeatherForm from "@/components/WeatherForm";

const apiKey = '4385dbc5c49741d1900135927221705';
// const baseUrl = 'https://api.weatherapi.com/v1/current.json?' + apiKey;

export default {
  name: 'HomeView',
  data() {
    return {
      weatherData: {},
      weatherDataString: [],
      qCity: '',
      hidden: false,

    }

  },

  components: {NavBar, WeatherResult, WeatherForm},
  mounted() {

    // this.axiosRequest();
  },
  methods: {
    format_date(value){
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },
    // A function that takes a value and returns a date in the format DD-MM-YYYY
    format_time(value){
      if (value) {
        return moment(String(value)).format(' H:mm ')
      }
    },

    hide() {
      this.hidden = !this.hidden
      console.log(this.hidden)
    },
    axiosRequest() {

      axios

          .get('http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+this.qCity+'&days=1&aqi=no&alerts=no', {
            'Content-type': 'application/ld+json',
          })
          .then((response) => {
            this.weatherData = response.data;
            // console.log(this.weatherData.forecast.forecastday[0].hour[4].condition);
          })

          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      // this.hide();
    },

    printObject(str) {

      document.body.appendChild(document.createElement("pre")).innerHTML = str
      this.weatherDataString = str
      ;

    },
    syntaxHighlight(json) {
      const obj = this.weatherData
      json = JSON.stringify(obj, null, 2)
      if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
      }
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';

      });
    }


  },

}
</script>
