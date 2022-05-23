<template>
  <div>

    <NavBar/>

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
      <button type="submit"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="printObject(syntaxHighlight())">Print Object
      </button>

    </form>

    <div>
    </div>

    <div class="mx-auto p-4 bg-purple-400 text-2xl  flex justify-left" v-if="weatherData.location">

      <div class="flex flex-wrap">

        <div class="w-full  px-2">

          <div
              class="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
            <!--            <img class="object-fill h-64 w-full " src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTY9g_wUdHT0YkmdoOj4pYPDf4RIyua72ubMxSnvlkL2bvOOrHz4jvz_D9ZJvfX">-->
            <div class="px-6 py-6  relative">
              <div v-if="weatherData.location" class="flex mb-4 justify-between items-center">
                <div class="text-left">
                  <h5 class="mb-0 font-medium text-xl">{{ weatherData.location.name }} - {{
                      weatherData.location.country
                    }}</h5>
                  <h6 class="mb-0">{{ format_time(weatherData.location.localtime) }}</h6>
                  <h6 v-if="weatherData.current.condition">{{ weatherData.current.condition.text }}</h6>
                </div>
                <div class="text-right">

                  <img class="" v-if="weatherData.current.condition" :src=weatherData.current.condition.icon>
                  <h3 class="font-bold text-4xl mb-0"><span>{{ weatherData.current.temp_c }}&deg;</span></h3>
                </div>
              </div>
              <div v-if="weatherData.current" class="block sm:flex justify-between items-center flex-wrap">
                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Temp</span><small class="px-2 inline-block">{{
                      weatherData.current.temp_c
                    }}&nbsp;&deg;</small>
                  </div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Feels like</span><small
                      class="px-2 inline-block">{{ weatherData.current.feelslike_c }}&nbsp;&deg;</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Max Temp</span><small
                      class="px-2 inline-block">{{
                      weatherData.forecast.forecastday[0].day.maxtemp_c
                    }}&nbsp;&deg;</small>
                  </div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Min Temp</span><small
                      class="px-2 inline-block">{{
                      weatherData.forecast.forecastday[0].day.mintemp_c
                    }}&nbsp;&deg;</small>
                  </div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Wind Kph</span><small
                      class="px-2 inline-block">{{ weatherData.current.wind_kph }} Km/h</small></div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Wind Mph</span><small
                      class="px-2 inline-block">{{ weatherData.current.wind_mph }} M/h</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Pressure</span><small
                      class="px-2 inline-block">{{ weatherData.current.pressure_mb }} Millibar</small></div>
                </div>
                <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Cloud Cover</span><small
                      class="px-2 inline-block">{{ weatherData.current.cloud }}%</small></div>
                </div>

                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Humidity</span><small
                      class="px-2 inline-block">{{ weatherData.current.humidity }}%</small></div>
                </div>
                <div class="w-48 sm:w-1/2">
                  <div class="flex mb-2 justify-between items-center"><span>Gusts</span><small
                      class="px-2 inline-block">{{ weatherData.current.gust_kph }} Km/h</small></div>
                </div>

              </div>
            </div>
            <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap bg">
              <h3 class="inline-block px-3">Forecast</h3>
            </div>
            <div>
              <details class="  shadow p-5 text-2xl" v-for="(hour, index) in weatherData.forecast.forecastday[0].hour"
                       :key="index">
                <summary class="list-none flex flex-wrap items-center cursor-pointer">
                  <img class="" v-if="hour.condition" :src=hour.condition.icon> {{ format_time(hour.time) }}
                  <div class="flex w-10 items-center justify-center">
                    <div class="border-8 border-transparent border-l-blue-100 ml-2"></div>
                  </div>

                </summary>
                <div class=" text-2xl p-5 shadow rounded bg-sky-700 ">
                  <div class="text-right ">
                    <h3 class="font-bold text-4xl mb-0"><span>{{ hour.temp_c }}&deg;</span></h3>
                  </div>

                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Weather Condition</span><small
                        class="px-2 inline-block">{{ hour.condition.text }}&nbsp;&deg;</small></div>
                  </div>

                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Temp Feels Like</span><small
                        class="px-2 inline-block">{{ hour.feelslike_c }}&nbsp;&deg;</small></div>
                  </div>
                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Wind Km/h </span><small
                        class="px-2 inline-block">{{ hour.wind_kph }} km/h</small></div>
                  </div>
                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Wind Direction</span><small
                        class="px-2 inline-block">{{ hour.wind_dir }}</small></div>
                  </div>

                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Cloud Cover</span><small
                        class="px-2 inline-block">{{ hour.cloud }} %</small></div>
                  </div>
                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Rain chance</span><small
                        class="px-2 inline-block">{{ hour.chance_of_rain }} %</small></div>
                  </div>

                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Pressure</span><small
                        class="px-2 inline-block">{{ hour.pressure_mb }} Millibar</small></div>
                  </div>


                  <div class="w-48 sm:w-1/2">
                    <div class="flex mb-2 justify-between items-center"><span>Humidity</span><small
                        class="px-2 inline-block">{{ hour.humidity }}%</small></div>
                  </div>

                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--      {{forecast}}-->
    <!--      <pre>{{forecast[0].hour}}</pre>-->
                              




  </div>


</template>
<style src="../assets/tailwind.css">

</style>

<script>
import NavBar from "@/components/NavBar";
import moment from "moment";
import axios from "axios";

// import Testapi from "@/views/Testapi";
const apiKey = '4385dbc5c49741d1900135927221705';
// const baseUrl = 'https://api.weatherapi.com/v1/current.json?' + apiKey;

export default {
  name: 'HomeView',
  data() {
    return {
      weatherData: {},
      weatherDataString: [],
      qCity: 'groningen',
      hidden: false,

    }

  },

  components: {NavBar},
  mounted() {

    this.axiosRequest();
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('dd')
      }
    },
    // A function that takes a value and returns a date in the format DD-MM-YYYY
    format_time(value) {
      if (value) {
        return moment(String(value)).format(' hh:mm a')
      }
    },

    hide() {
      this.hidden = !this.hidden
      console.log(this.hidden)
    },
    axiosRequest() {

      axios

          .get('http://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + this.qCity + '&days=1&aqi=no&alerts=no', {
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
