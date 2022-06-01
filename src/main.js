import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Geolocation from 'vue3-geolocation';
import  VueGoogleMaps  from '@fawmi/vue-google-maps'


createApp(App).use(store).use(Vue3Geolocation).use(VueGoogleMaps, {
    load:{
        key:''
    },

}).use(router).mount('#app')
