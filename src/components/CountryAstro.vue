<template>
  <h1 v-if="weatherData.location" class="text-4xl uppercase pt-8 text-white from-current mb-8 text-center">Astro results in {{weatherData.location.name}}</h1>
  <div v-if="weatherData.current" class="">
    <div class="lg:w-9/12 md:w-9/12 sm:w-6/12 mx-auto rounded py-2 " >

      <div class=" text-white relative min-w-0 break-words text-green-300  rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-slate-900 p-3 ">
        <div v-if="weatherData.current" class="block sm:flex justify-between items-center flex-wrap">
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Sunrise:</h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.sunrise}}</h1></div>
          </div>
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Sunset: </h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.sunset}}</h1></div>
          </div>
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Moonrise:</h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.moonrise}}</h1></div>
          </div>
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Moonset:</h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.moonset}}</h1></div>
          </div>
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Moon phase:</h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.moon_phase}}</h1></div>
          </div>
          <div class="w-48 sm:w-1/2">
            <div class="flex mb-2 justify-between items-center"><h1>Moon illumination:</h1><h1
                class="px-2 inline-block">{{weatherData.forecast.forecastday[0].astro.moon_illumination}}</h1></div>
          </div>

        </div>

        </div>

      </div>
    </div>


</template>

<script>
export default {
  name: "CountryAstro",
  props: ["weatherData"]
}
</script>

<style scoped>

</style>