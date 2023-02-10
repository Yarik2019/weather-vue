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
        key: 'AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k',
    },
})
// AIzaSyBea65xicuAhWz8oVHvEn6_Rlg8h9nr_EU  AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg  AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k
app.mount('#app');
