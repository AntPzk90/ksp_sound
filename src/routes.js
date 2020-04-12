import VueRouter from 'vue-router';
import MainPage from './components/main-page.vue';
import MarketPage from './components/market-page.vue';
import SoundCardDetails from './components/sound-card-details.vue'

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/',
      redirect: { name: 'main'},
    },
    {
      path: `/sounds`,
      name: `sounds`,
      component: MarketPage,
    },
  ],
  mode: `history`
});
