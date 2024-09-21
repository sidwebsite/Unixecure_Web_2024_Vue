import './assets/scss/style.scss'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
// import { VueReCaptcha } from 'vue-recaptcha-v3'
import App from './App.vue'
import router from './router'
import vSelect from "vue-select";
import VueSocials from 'vue-socials';
vSelect.props.components.default = () => ({
    OpenIndicator: {
        render: () => h('span',  {class: {'fa-regular fa-angle-down': true}}),
    },
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-select", vSelect);
app.use(VueSocials)
// app.use(VueReCaptcha, {
//     siteKey: '6LdTX84eAAAAAK-EU8pB4R9dftS50ye-yo8I8Y7_',
//     loaderOptions: {
//         useRecaptchaNet: true
//     }
// });
app.mount('#app')
