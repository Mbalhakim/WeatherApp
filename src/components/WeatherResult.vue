<template>

  <h1 v-if="weatherData.location" class="text-4xl uppercase text-white from-current mb-8 text-center">Weather results in
    {{ weatherData.location.name }}</h1>
  <!--   Checking if the weatherData.location is true. If it is true, it will display the div.-->
  <div class="" v-if="weatherData.location">
    <div class="lg:w-9/12 md:w-9/12 sm:w-6/12 mx-auto ">

      <div class=" relative min-w-0 break-words text-white  rounded-3xl  mb-4  bg-slate-900 ">
        <div class="p-6 sm:flex sm:flex-col sm:justify-start relative">
          <div v-if="weatherData.location" class="flex  mb-4 justify-between items-center text-pink-600">
            <div class="text-left ">
              <h5 class="mb-0 font-black text-2xl">{{ weatherData.location.name }} </h5>
              <h6 class="mb-0 font-black text-2xl">{{
                  weatherData.location.region
                }} - {{ weatherData.location.country }}</h6>

              <h6 class="mb-0 font-black text-2xl" v-if="weatherData.current.condition">
                {{ weatherData.current.condition.text }}</h6>
            </div>
            <div class="text-right">

              <img class="" v-if="weatherData.current.condition" :src=weatherData.current.condition.icon>
              <h3 class=" text-4xl text-pink-500  mb-0"><span>{{ weatherData.current.temp_c }}&deg;</span></h3>
            </div>
          </div>
          <div v-if="weatherData.current" class="block sm:flex-col justify-between items-center text-2xl flex-wrap">
            <div class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center "><p>Temp</p>
                <p class="lg:px-10 justify-center  inline-block">{{
                    weatherData.current.temp_c
                  }} <i class="fa-solid fa-temperature-high"></i></p>
              </div>
            </div>
            <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Feels like </p>
                <p
                    class="lg:px-10 inline-block justify-center ">{{ weatherData.current.feelslike_c }} <i
                    class="fa-solid fa-temperature-high"></i></p></div>
            </div>

            <div class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Max Temp</p>
                <p
                    class="lg:px-10 inline-block justify-center">{{
                    weatherData.forecast.forecastday[0].day.maxtemp_c
                  }} <i class="fa-solid fa-temperature-arrow-up"></i></p>
              </div>
            </div>
            <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Min Temp </p>
                <p
                    class="lg:px-10 inline-block justify-center">{{
                    weatherData.forecast.forecastday[0].day.mintemp_c
                  }} <i class="fa-solid fa-temperature-arrow-down"></i></p>
              </div>
            </div>

            <div class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Wind </p>
                <p
                    class="lg:px-10 inline-block justify-center">{{ weatherData.current.wind_kph }} Km/h <i
                    class="fa-solid fa-wind"></i>
                </p></div>
            </div>

            <div v-if="weatherData.current.condition" class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Cloud Cover </p>
                <p
                    class="lg:px-10 inline-block justify-center">{{ weatherData.current.cloud }}% <i
                    class="fa-solid fa-cloud"></i></p>
              </div>
            </div>

            <div class="w-48 sm:w-1/2">
              <div class="flex mb-2 justify-between items-center"><p>Humidity </p>
                <p
                    class="lg:px-10  inline-block justify-center">{{ weatherData.current.humidity }}<i
                    class="fa-solid fa-droplet"></i></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "WeatherResult",
  // Passing the data from the parent component to the child component.
  props: ["weatherData"]
}
</script>

<style scoped>

</style>