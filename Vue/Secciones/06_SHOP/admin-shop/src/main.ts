import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';
import './config/yup';

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(createPinia());
app.use(router);
app.use(Toast);

app.mount('#app');
