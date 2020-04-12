import Vue from 'vue'
import App from './components/App.vue'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import router from './routes.js';
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
