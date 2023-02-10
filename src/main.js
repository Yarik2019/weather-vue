import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
const app = createApp(App)
app.use(store);
app.use(router);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBea65xicuAhWz8oVHvEn6_Rlg8h9nr_EU',
    },
})
// AIzaSyBea65xicuAhWz8oVHvEn6_Rlg8h9nr_EU  AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
app.mount('#app');
