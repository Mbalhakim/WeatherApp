<template>
  <div>

    <NavBar />
    <form  @submit.prevent="axiosRequest" class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
               type="text"
               name="City"
               id=""
               placeholder="City"
               v-model="qCity"
               required>
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit">
          Search
        </button>
        <button @click="printObject(syntaxHighlight())"
                class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                type="button">
          Print object
        </button>
      </div>
    </form>
    <div>
    </div>

    <div class="mx-auto p-4 bg-purple-400  flex justify-left" v-if="weatherData.location">

      <div class="flex flex-wrap">

        <div class="w-full  px-2">

          <div class="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
            <!--            <img class="object-fill h-64 w-full " src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTY9g_wUdHT0YkmdoOj4pYPDf4RIyua72ubMxSnvlkL2bvOOrHz4jvz_D9ZJvfX">-->
            <div class="px-6 py-6 relative">
              <div v-if="weatherData.location" class="flex mb-4 justify-between items-center">
                <div class="text-left">
                  <h5 class="mb-0 font-medium text-xl">{{ weatherData.location.name }} - {{weatherData.location.country }}</h5>
                  <h6 class="mb-0">{{ format_time(weatherData.location.localtime) }}</h6>
                  <h6 v-if="weatherData.current.condition">{{ weatherData.current.condition.text }}</h6>
                </div>
                <div class="text-right">

                  <img v-if="weatherData.current.condition" :src=weatherData.current.condition.icon>
                  <h3 class="font-bold text-4xl mb-0"><span>{{weatherData.current.temp_c}}&deg;</span></h3>
                </div>
              </div>
              <div v-if="weatherData.current" class="block sm:flex justify-between items-center flex-wrap">
                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Temp</span><small class="px-2 inline-block">{{weatherData.current.temp_c}}&nbsp;&deg;</small></div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Feels like</span><small class="px-2 inline-block">{{weatherData.current.feelslike_c}}&nbsp;&deg;</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Wind Kph</span><small class="px-2 inline-block">{{weatherData.current.wind_kph}} Km/h</small></div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Wind Mph</span><small class="px-2 inline-block">{{weatherData.current.wind_mph}} M/h</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Pressure</span><small class="px-2 inline-block">{{weatherData.current.pressure_mb}} Millibar</small></div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Cloud Cover</span><small class="px-2 inline-block">{{weatherData.current.cloud}}%</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Humidity</span><small class="px-2 inline-block">{{weatherData.current.humidity}}%</small></div>
                </div>
                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Gusts</span><small class="px-2 inline-block">{{weatherData.current.gust_kph}} Km/h</small></div>
                </div>

              </div>
            </div>
            <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span class="inline-block px-3"><small>Forecast</small></span></div>

          </div>
        </div>
      </div>
    </div>

    <div v-for="(forecast, index) in weatherData.forecast" :key="index">
<!--      {{forecast}}-->
<!--      <pre>{{forecast[0].hour}}</pre>-->
      <h1 v-for="(hour, index) in weatherData.forecast.forecastday[0].hour" :key="index">
<!--        {{hour.time}}-->
      </h1>

    </div>
  </div>


</template>
<style src="../assets/tailwind.css">

</style>

<script>
import NavBar from "@/components/NavBar";
import moment from "moment";
import axios from "axios";

const apiKey = '4385dbc5c49741d1900135927221705';
// const baseUrl = 'https://api.weatherapi.com/v1/current.json?' + apiKey;

export default {
  name: 'HomeView',
  data() {
    return {
      weatherData: {},
      weatherDataString: [],
      qCity: 'asd',
      hidden: false,

    }

  },

  components: {NavBar},
  mounted() {

    this.axiosRequest();
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
