<template>
<div style="height: 100%">
  <div class="sound-card" :class="{'sound-card--active': isPlaying,'': !isPlaying}" @click="changeShowingPopup()">
    <img class="sound-card__image" :src="imgPath" width="300" height="300">
    <div class="sound-card__descr">
      <h2 class="sound-card__title">{{title}} {{isMusicPlaying}}</h2>
      <span class="sound-card__genre">{{genre}}</span>
    </div>
  </div>
  <sound-card-details v-if="showPopup"
    :src="src"
    :title="title"
    :genre="genre"
    :imgPath="imgPath"
    @closePopup="changeShowingPopup()"
  ></sound-card-details>
</div>
</template>
<script>
import SoundCardDetails from './sound-card-details.vue';

export default {
  props: {
    src: String,
    title: String,
    genre: String,
    imgPath: String,
    isMusicPlaying: Boolean
  },
  components: {
    soundCardDetails: SoundCardDetails,
  },
  data() {
    return {
      showPopup: false,
      isPlaying: false,
      duration: 0,
      valueInput: 0,
    }
  },
  methods: {
  //   startAudio() {
  //     if (!this.isPlaying) {
  //       this.isPlaying = true;
  //       this.$refs.audio.play();
  //       this.duration = this.$refs.audio.duration;
  //     } else if (this.isPlaying) {
  //       this.isPlaying = false;
  //       this.$refs.audio.pause();
  //     }
  //   },
  //   emitPlayingMusic() {
  //     if (this.isPlaying) {
  //       this.$emit('playingMusic', true)
  //     } else {
  //       this.$emit('playingMusic', false)
  //     }
  //   },
  //   changeValue() {
  //     this.$refs.audio.pause();
  //   },
  //   updateValue() {
  //     let audio = this.$refs.audio;
  //     audio.currentTime = this.valueInput;
  //     this.$refs.audio.play();
  //   },
    changeShowingPopup() {
      this.showPopup = !this.showPopup
    }
  },
  // mounted() {
  //   let audio = this.$refs.audio;
  //   audio.addEventListener(`timeupdate`, () => {this.valueInput = audio.currentTime})
  // },
  // updated(){
  //   this.currentTime = this.$refs.audio.currentTime;
  //   if (this.valueInput === this.duration) {
  //     this.valueInput = 0;
  //     this.isPlaying = false;
  //   }
  // }
}
</script>
<style scoped>
audio::-webkit-media-controls-panel{
  background-color: transparent;
}

audio::-webkit-media-controls-mute-button{
  background-color: red;
  display: none;
}
audio::-moz-media-controls-mute-button{
  background-color: red;
  display: none;
}
audio::-webkit-media-controls-play-button{
  background-color: purple;
}

audio::-webkit-media-controls-timeline-container{
  background-color: green;
}

audio::-webkit-media-controls-current-time-display{
  background-color: red;
}

audio::-webkit-media-controls-time-remaining-display{
  background-color: yellow;
}

audio::-webkit-media-controls-timeline{
  background-color:;
}

audio::-webkit-media-controls-volume-slider-container{
  background-color: green;
}

audio::-webkit-media-controls-volume-slider{
  background-color: pink;
}

audio::-webkit-media-controls-seek-back-button{
  background-color: brown;
}

audio::-webkit-media-controls-seek-forward-button{
  background-color: orange;
}

audio::-webkit-media-controls-fullscreen-button{}

audio::-webkit-media-controls-rewind-button{}

audio::-webkit-media-controls-return-to-realtime-button{
  background-color: purple;
}

audio::-webkit-media-controls-toggle-closed-captions-button{}
</style>
