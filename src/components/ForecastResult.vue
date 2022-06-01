<template>
  <!--  This is a conditional statement that checks if the weatherData.forecast is true. If it is true, it will display the-->
  <!--  text "Forecast results in hours" in an h1 tag.-->
  <h1 v-if="weatherData.forecast" class="text-4xl uppercase text-white from-current mb-8 text-center">Forecast results
    in hours</h1>

  <!--  This is a div that is only displayed if the weatherData.forecast is true.-->
  <div
      class=" bg-slate-900 rounded-3xl  lg:w-9/12 md:w-9/12 sm:w-6/12 text-white mx-auto relative min-w-0 break-words text-green-400   rounded-3xl  shadow-sm bg-slate-900  "
      v-if="weatherData.forecast">

    <!--    This is a v-for loop that loops through the weatherData.forecast.forecastday[0].hour array.-->
    <details class="p-10 " v-for="(hour, index) in weatherData.forecast.forecastday[0].hour" :key="index">

      <summary class="list-none  flex flex-wrap items-center cursor-pointer ">


        <div class="p-4">
          <h1>{{ format_time(hour.time) }} </h1>
        </div>


        <div class="p-4">
          <h1> {{ hour.temp_c }} <i class="fa-solid fa-temperature-high"></i></h1>
        </div>
        <img class="" v-if="hour.condition" :src=hour.condition.icon>

        <div class="flex w-10 items-center justify-center">
          <div class="border-8 border-transparent border-l-green-400  ml-2"></div>
        </div>
        <hr width="100%">

      </summary>

      <div class=" rounded flex-wrap bg-blue-900 p-2 text-white  flex items-center ">


        <div class=" sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Condition:</span><small
              class="px-2 inline-block">{{ hour.condition.text }}&nbsp;</small></div>
        </div>

        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Feels like:</span><small
              class="px-2 inline-block">{{ hour.feelslike_c }}&nbsp;&deg;</small></div>
        </div>
        <div class="w-48 sm:w-1/2">
          <div class="flex  justify-between items-center"><span>Wind:</span><small
              class="px-2 inline-block">{{ hour.wind_kph }}km/h</small></div>
        </div>
        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center">Wind Direction:<small
              class="px-2 inline-block">{{ hour.wind_dir }}</small></div>
        </div>

        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Cloud Cover:</span><small
              class="px-2 inline-block">{{ hour.cloud }} %</small></div>
        </div>
        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Rain chance:</span><small
              class="px-2 inline-block">{{ hour.chance_of_rain }}%</small></div>
        </div>

        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Pressure:</span><small
              class="px-2 inline-block">{{ hour.pressure_mb }}mb</small></div>
        </div>


        <div class="w-48 sm:w-1/2">
          <div class="flex mb-2 justify-between items-center"><span>Humidity:</span><small
              class="px-2 inline-block">{{ hour.humidity }}%</small></div>
        </div>

      </div>

    </details>

  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ForecastResult",
  props: ["weatherData"],
  methods: {
    // This is a method that is used to format the date and time.
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
  }
}
</script>

<style scoped>

</style>