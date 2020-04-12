<template>
  <section class="sounds-page" ref="soundPage">
    <div class="to-market">
      <router-link to="/" class="to-market__link to-market__link--market">На Главную</router-link>
    </div>
    <h1 class="sounds-page__title">Нееебический магазин</h1>
    <div class="sounds-page__wrapper container">
      <button class="sounds-page__mobile-filter-btn" @click="mobileFilterHidden=!mobileFilterHidden">
        <transition name="color-link">
          <span v-if="!mobileFilterHidden">фильтр</span>
        </transition>
        <transition name="link">
          <span v-if="mobileFilterHidden">скрыть</span>
        </transition>
      </button>
      <transition name="slide-in">
        <nav class="side-bar" v-if="mobileFilterHidden">
          <ul class="side-bar__list">
            <li class="side-bar__list-item"
              :class="{'side-bar__list-item--active': genreToFilter===`Все треки`}"
            >
              <a href="#" class="side-bar__link"
                @click.prevent="filterGenre(`Все треки`)">
                Все треки
              </a>
            </li>
            <li class="side-bar__list-item" v-for="(genre, index) in genresList" :key="index+1"
              :class="{'side-bar__list-item--active': genreToFilter===genre}"
            >
              <a href="#" class="side-bar__link" @click.prevent="filterGenre(genre)">
                {{genre}}
              </a>
            </li>
          </ul>
        </nav>
       </transition>
      <ul class="audio-list">
        <li class="audio-list__item" v-for="(sound,index) in allSongs" :key="index" ref="soundCard">
          <sound-card
            :src="sound.src"
            :title="sound.title"
            :genre="sound.genre"
            :imgPath="sound.img"
            :isMusicPlaying="isMusicPlaying"
            @playingMusic="changePlayingStatus($event)"
          >
          </sound-card>
        </li>
      </ul>
    </div>
    <section class="sounds-page__dscr">
      <video autoplay muted loop class="sounds-page__dscr-video" width="100%">
        <source src="preview.mp4" type="video/mp4">
      </video>
      <div class="sounds-page__dscr-wrapper container">
        <h3 class="sounds-page__dscr-title">Some title</h3>
        <p class="sounds-page__dscr-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error hic aspernatur blanditiis, explicabo, corrupti placeat ad ipsum esse fugit illum nam. Eum quas error, eligendi consequatur deserunt velit dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error hic aspernatur blanditiis, explicabo, corrupti placeat ad ipsum esse fugit illum nam. Eum quas error, eligendi consequatur deserunt velit dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error hic aspernatur blanditiis, explicabo
          ,corrupti placeat ad ipsum esse fugit illum nam. Eum quas error, eligendi consequatur deserunt velit dolorem.</p>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__wrapper container">
        <h2 class="footer__title">Krik Sound Production</h2>
        <a href=":mailto:kspProduction@mail.com">kspProduction@mail.com</a>
      </div>
    </footer>
  </section>
</template>

<script>
import {songs} from './../mock.js'
import soundCard from './sound-card.vue'
export default {
  components: {
    soundCard
  },
  data() {
    return {
      allSongs: songs,
      genreToFilter: `Все треки`,
      isMusicPlaying: false,
      mobileFilterHidden: true,
    }
  },
 computed: {
    genresList(genre) {
      const genres = Array.from(new Set(songs.map((itemGenre) => itemGenre.genre)));
      return genres
    }
  },
  methods: {
    filterGenre(genre) {
      this.genreToFilter = genre;
      if (genre === `Все треки`) {
        this.allSongs = songs;
      } else {
        this.allSongs = songs.filter((song) => {return song.genre === genre})
      }
    },
    changePlayingStatus(status) {
      this.isMusicPlaying = status;
    }
  },
  mounted() {
    var pageWidth = this.$refs.soundPage.offsetWidth;
    if (pageWidth < 768) {
      this.mobileFilterHidden = false;
    }
     this.$nextTick(function() {
      window.addEventListener('resize', () => {
         if (pageWidth >= 768) {
          this.mobileFilterHidden = true;
        } else {
          this.mobileFilterHidden = false;
        }
      });
    })
  }
}
</script>
<style>
  .link-enter-active {
    transform: scale(1.2);
    transition: all .3s ease;
  }
  .link-leave-active {
    transform: scale(1.2);
    transition: all .3s ease-in-out;
  }
  .link-enter, .link-leave-to {
    transform: scale3d(.1,.3,.1);
    opacity: 0;
    transition: all .1s ease-in-out;
  }
  .color-link-enter-active {
    transform: scale(1.2);
    transition: all .3s ease;
  }
  .color-link-leave-active {
    transform: scale(1.2);
    transition: all .1s ease-in-out;
  }
  .color-link-enter, .color-link-leave-to {
    transform: scale3d(.1,.3,.1);
    opacity: 0;
    transition: all .1s ease-in-out;
  }

  .slide-in-enter-active {
   animation: in 0.3s ease-in
  }

  .slide-in-leave-to {
    animation: out 0.3s ease-in
  }
  @keyframes in {
    0%{left: -200px;}
    100%{left:0;}
  }
  @keyframes out {
    0%{left: 0;}
    100%{left: -200px;}
  }

</style>
