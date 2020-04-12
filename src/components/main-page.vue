<template>
  <div>
    <div class="to-market">
      <a href="#" class="to-market__link" @click.prevent="changePage()">музыка</a>
    </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <ul id="menu" ref="menu" class="menu">
        <li data-menuanchor="welcome" class="nav__list-item">
          <a href="#welcome" class="nav__link">
            welcome
          </a>
        </li>
        <li data-menuanchor="works" class="nav__list-item">
          <a href="#works" class="nav__link">
            what we do
          </a>
        </li>
        <li data-menuanchor="info" class="nav__list-item">
          <a href="#info" class="nav__link">
            info
          </a>
        </li>
        <li data-menuanchor="klips" class="nav__list-item">
          <a href="#klips" class="nav__link">
            klips
          </a>
        </li>
      </ul>

      <div class="section first-page-screen">
        <first-screen :title="WpFields.title"
                       :slogan="WpFields.slogan">
        </first-screen>
      </div>

      <div class="section second-page-screen">
        <second-screen>
        </second-screen>
      </div>

      <div class="section third-page-screen">
        <third-screen>
        </third-screen>
      </div>

      <div class="section last-page-screen" data-anchor="klips">
        <last-screen :mediaList="WpFields.mediaList">
        </last-screen>
        <div class="up-btn-wrapper">
          <button class="up-btn" @click="$refs.fullpage.api.moveTo('welcome')">
            <img src="img/icons/icon-up.svg" height="48" width="48">
          </button>
          <span>
            На верх
          </span>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import firstScreen from './full-page-component/first-page';
import secondScreen from './full-page-component/second-page';
import thirdScreen from './full-page-component/third-page';
import lastScreen from './full-page-component/last-page';
import {title, slogan} from '../mock.js';

export default {
  name: 'mainComponent',
  components: {
    swiper,
    swiperSlide,
    firstScreen,
    secondScreen,
    thirdScreen,
    lastScreen,
  },
  data () {
    return {
      WpFields: {
        title: title,
        slogan: slogan,
        mediaList: null,
      },

      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        anchors: ['welcome', 'works', 'info', 'klips'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['welcome', 'works', 'info', 'klips'],
        sectionsColor: ['#41b883', '#000', '#0798ec'],
        controlArrows: true,
        paddingTop: '8vh',
        sectionSelector: '.section',
	      slideSelector: '.slide',
        scrollHorizontally: true,
        continuousHorizontal:true,
        lazyLoading: true,
      },
    };
  },
  methods: {
    changePage() {
      this.$refs.menu.remove();
      this.$router.push('sounds');
    }
  },
  created() {
    // this.$http.get('v3/posts/2').then(response => {
    //   this.WpFields.title = response.data.acf.big_title;
    //   this.WpFields.slogan = response.data.acf.small_title;
    //   this.WpFields.mediaList = response.data.acf.media;
    //   console.log(response)
    // })
  },
}
</script>

<style scoped>

</style>
