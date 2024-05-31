// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import axios from 'axios';

// Vue.config.productionTip = false;
// Vue.prototype.$http = axios;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(router).mount('#app');
