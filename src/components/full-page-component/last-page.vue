<template>
  <div>
    <h2 class="last-page__title">Klip "Krik"</h2>
    <div class="slider-wrapper">
        <swiper :options="swiperOption" ref="mySwiper" class="slide-item">
          <swiper-slide v-for="(link, index) in clips" :key="index">
            <div class="iframe-wrapper">
              <img src="img/krik-photo.jpg" width="100%" height="100%" @click="isKlipShow=!isKlipShow; changelink(link)">
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev klips-slider-btn" slot="button-prev" ></div>
          <div class="swiper-button-next klips-slider-btn" slot="button-next" ></div>
        </swiper>
        <div class="iframe-wrapper__youtube-popup" v-if="isKlipShow">
          <button class="iframe-wrapper__youtube-popup-close-btn" @click="isKlipShow=!isKlipShow">close</button>
          <youtube :video-id="link"
            ref="youtube"
            :width="`100%`"
            :height="`100%`"
            :player-vars="playerVars"
            ></youtube>
        </div>
    </div>
  </div>

</template>
<script>
import {clips} from '../../mock.js'
export default {
  props:{
    mediaList: Object,
  },
  data() {
    return {
      isKlipShow: false,
      playerVars: {
        autoplay: 1
      },
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      clips: clips,
      link: null,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    changelink(link) {
      console.log(link)
      this.link = link
    }
  }
}
</script>

<style scoped>
.swiper-container{
  height: 70vh;
}
.iframe-wrapper{
  height: 100%;
  width: 100%;
  display: block;
}
</style>
