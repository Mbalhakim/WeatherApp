<template>
  <div  class="sm:grid sm:grid-cols-2 bg-gray-50 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">

    <!--    Looping through the array of articles and displaying them.-->
    <div v-for="(content, index) in newsResponse.articles" :key="index">


      <!--      Checking if the content is there. If it is, it will display the content.-->
      <div v-if="content" class="bg-white">
        <div id="empty">
          <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div>
              <img v-if="content.urlToImage" class="object-fill h-80 w-full " :src="content.urlToImage"/>
              <img v-else class=""
                   src="https://i1.wp.com/www.fryskekrite.nl/wordpress/wp-content/uploads/2017/03/No-image-available.jpg"/>
              <div class="px-4 py-2">
                <h1 v-if="content" class="text-xl font-gray-700 font-bold">{{ content.title }}</h1>
                <h4 v-if="content.author === null">Author: no authors</h4>
                <h4 v-else>Author: {{ content.author }}</h4>

                <div class="flex space-x-2 mt-2">

                  <h3 class="text-lg text-gray-600 font-semibold mb-2">{{ content.description }}</h3>

                </div>
                <p class="text-sm tracking-normal " id="demo-3">{{ content.content }}</p>

                <a :href="content.url" target="_blank">
                  <button class="mt-12 w-full text-white text-center bg-cyan-800 py-2 rounded-lg">Read more</button>
                </a>
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
  name: "NewsResults",
  // Passing the data from the parent component to the child component.
  props: ["newsResponse"]
}
</script>

<style scoped>

</style>