<template>
  <div>
      <p class="slogan">
        {{slogan}}
      </p>
      <h1 class="big-title" @click="destr()">
        {{title}}
      </h1>
      <ul class="soc-list">
        <li class="soc-list__item">
            <a href="#" class="soc-list__link link-vk"  @mouseenter="showVkIcon=false" @mouseleave="showVkIcon=true">
              <transition name="color-link">
                <img src="img/icons/icon-vk.svg" alt="icon-vk" class="soc-list__img-color" v-if="!showVkIcon">
              </transition>
              <transition name="link">
                <img src="img/icons/icon-vk-orange.svg" alt="icon-vk" class="soc-list__img" v-if="showVkIcon">
              </transition>
            </a>
        </li>
        <li class="soc-list__item">
          <a href="#" class="soc-list__link link-fb" @mouseenter="showFbIcon=false" @mouseleave="showFbIcon=true">
            <transition name="color-link">
              <img src="img/icons/icon-fb.svg" alt="icon-facebook" class="soc-list__img-color" v-if="!showFbIcon">
            </transition>
            <transition name="color-link">
              <img src="img/icons/icon-fb-orange.svg" alt="icon-facebook" class="soc-list__img" v-if="showFbIcon">
            </transition>
          </a>
        </li>
        <li class="soc-list__item">
          <a href="#" class="soc-list__link link-inst" @mouseenter="showInstIcon=false" @mouseleave="showInstIcon=true">
            <transition name="color-link">
              <img src="img/icons/icon-inst.svg" alt="icon-instagram" class="soc-list__img-color" v-if="!showInstIcon">
            </transition>
            <transition name="link">
              <img src="img/icons/icon-inst-orange.svg" alt="icon-instagram" class="soc-list__img" v-if="showInstIcon">
            </transition>
          </a>
        </li>
        <li class="soc-list__item">
          <a href="#" class="soc-list__link link-ytb" @mouseenter="showYtbIcon=false" @mouseleave="showYtbIcon=true">
            <transition name="color-link">
              <img src="img/icons/icon-youtube.svg" alt="icon-youtube" class="soc-list__img-color" v-if="!showYtbIcon">
            </transition>
            <transition name="link">
              <img src="img/icons/icon-youtube-orange.svg" alt="icon-youtube" class="soc-list__img" v-if="showYtbIcon">
            </transition>
          </a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{
    title: String,
    slogan: String,
  },
  data () {
    return {
      showVkIcon: true,
      showFbIcon: true,
      showInstIcon: true,
      showYtbIcon: true,
    }
  },
  methods: {
    destr() {
      fullpage_api.destroy()
    }
  }
}
</script>
<style scoped>
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
</style>
