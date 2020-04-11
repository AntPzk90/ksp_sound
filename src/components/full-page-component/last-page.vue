<template>
  <div>
    <h2 class="last-page__title" @click="consoled()">Klip "Krik"</h2>
    <div class="slider-wrapper">
        <swiper :options="swiperOption" ref="mySwiper" class="slide-item">
          <swiper-slide v-for="(link, index) in clips" :key="index">
            <div class="iframe-wrapper">
              <iframe width="100%" height="100%" :src="link"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0"
                allowfullscreen
                class="you-frame"
                id="player"
                >
              </iframe>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev klips-slider-btn" slot="button-prev"></div>
          <div class="swiper-button-next klips-slider-btn" slot="button-next"></div>
        </swiper>
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    consoled() {
      console.log(this.clips)
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
