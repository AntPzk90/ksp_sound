<template>
  <div class="sound-card-details">
    <div class="sound-card-details__overlay"></div>
    <button class="sound-card-details__close-btn" @click="closePopup()">close</button>
    <iframe class="sound-card-details__iframe" width="300" height="300" scrolling="no" frameborder="no" allow="autoplay"
     src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/762608875&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div class="sound-card-details__wrapper">
      <h1 class="sound-card-details__title">{{title}}</h1>
      <p class="sound-card-details__genre">some-genre</p>
      <p class="sound-card-details__dscr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quis error hic aspernatur blanditiis, explicabo, corrupti
         placeat ad ipsum esse fugit illum nam. Eum quas error,
          eligendi consequatur deserunt velit dolorem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          Quis error hic aspernatur blanditiis, explicabo, corrupti
          placeat ad ipsum esse fugit illum nam. Eum quas error,
           eligendi consequatur deserunt velit dolorem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quis error
             hic aspernatur blanditiis, explicabo, corrupti placea
             t ad ipsum esse fugit illum nam. Eum quas error,
              eligendi consequatur deserunt velit dolorem.
      </p>
      <audio controls class="sound-card__audio" ref="audio">
        <source :src="src">
      </audio>
      <div class="sound-card__controls" style="display:none">
      <button class="sound-card__play-pause-btn"
        :class="{'sound-card__play-pause-btn--pause': isPlaying,
                 'sound-card__play-pause-btn--play': !isPlaying}"
                @click="startAudio(), emitPlayingMusic()">
      </button>
      <div class="sound-card__responsive">
        <div class="sound-card__equalizer">
          <img src="img/equlizer-color.gif" class="sound-card__equalizer-img" width="230" height="40" alt="sounds-paing" v-if="isPlaying">
           <img src="img/equlizer-color.png" class="sound-card__equalizer-img" width="230" height="40" alt="sounds-paing" v-else>
        </div>
        <input class="sound-card__range"
          type="range"
          step="1"
          :max="duration"
          v-model="valueInput"
          @mousedown="changeValue()"
          @mouseup="updateValue()">
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    title: String,
    genre: String,
    imgPath: String,
    isMusicPlaying: Boolean
  },
  data() {
    return {
      isPlaying: false,
      duration: 0,
      valueInput: 0,
    }
  },
  computed: {
    consoled() {
      console.log(this.imgPath)
    }
  },
  methods: {
    startAudio() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.$refs.audio.play();
        this.duration = this.$refs.audio.duration;
      } else if (this.isPlaying) {
        this.isPlaying = false;
        this.$refs.audio.pause();
      }
    },
    changeValue() {
      this.$refs.audio.pause();
    },
    updateValue() {
      let audio = this.$refs.audio;
      audio.currentTime = this.valueInput;
      this.$refs.audio.play();
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    let audio = this.$refs.audio;
    audio.addEventListener(`timeupdate`, () => {this.valueInput = audio.currentTime})
  },
  updated(){
    this.currentTime = this.$refs.audio.currentTime;
    if (this.valueInput === this.duration) {
      this.valueInput = 0;
      this.isPlaying = false;
    }
  }
}
</script>
<style scoped>

</style>
