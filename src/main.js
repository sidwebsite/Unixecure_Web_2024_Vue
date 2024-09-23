import './assets/scss/style.scss'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
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
const options = {
    confirmButtonColor: '#303878',
    cancelButtonColor: '#303878',
};
app.use(VueSweetalert2, options);
app.mount('#app')
