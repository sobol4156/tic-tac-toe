import './shared/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import ButtonBack from './shared/UI/ButtonBack.vue'



const app = createApp(App);
app.use(router);
app.component(ButtonBack)
app.mount('#app');
