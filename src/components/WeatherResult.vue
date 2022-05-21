<template>
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
          <div class="px-6 py-6 relative">
            <div class="text-center justify-between items-center flex" style="flex-flow: initial;">
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Sun</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"><span class="block my-1">38.3&deg;</span></div>
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"><span class="block my-1">39.9&deg;</span></div>
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"><span class="block my-1">40.1&deg;</span></div>
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"><span class="block my-1">41.5&deg;</span></div>
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"><span class="block my-1">40.1&deg;</span></div>
              <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"><span class="block my-1">38&deg;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherResult"
}
</script>

<style scoped>

</style>