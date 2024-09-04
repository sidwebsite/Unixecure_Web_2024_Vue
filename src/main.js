import './assets/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vSelect from "vue-select";
import VueSocials from 'vue-socials';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-select", vSelect);
app.use(VueSocials)
app.mount('#app')
