<script setup lang="ts">
// @ts-ignore
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

// https://ismail9k.github.io/vue3-carousel/examples.html
const props = defineProps({
  settings: {
    type: Object,
    default: () => ({
      itemsToShow: 2,
      snapAlign: 'center',
    }),
  },
  slides: {
    type: Array,
    required: true,
  },
  slideStyle: {
    type: Object,
    default: () => ({
      height: 'auto',
    }),
  },
})
</script>

<template>
  <carousel :items-to-show="1" :settings='settings'>
    <slide v-for="slide in slides" :key="slide.src">
      <div class="carousel__item" :style="slideStyle">
<!--        <div :style="`background: url('` + slide.src + `')`"></div>-->
<!--        <div :style="{background: `url(${slide.src})`}"></div>-->
        <img :src="slide.src"/>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style lang="scss">
.carousel__item {
  //height: 600px;
  //max-height: 800px;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    max-height:100%;
    max-width: 100%;
  }
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  @apply bg-blue
  box-sizing: content-box;
  border: 5px solid white;
  font-size: calc(var(--vc-nav-width) * 20);
  border-radius: calc(var(--vc-nav-width) * 1.8);
  width: calc(var(--vc-nav-width) * 1.8);
  height: calc(var(--vc-nav-width) * 1.8);
}
.carousel__pagination-button {
  //margin: calc(var(--vc-pgn-margin) * 1.3);
  //width: calc(var(--vc-pgn-width) * 1.3);
  //height: calc(var(--vc-pgn-height) * 1.3);
  //border-radius: var(--vc-pgn-height);
  //border: 0;
  //cursor: pointer;
  //background-color: var(--vc-pgn-background-color);
  //
  //&.carousel__pagination-button--active {
  //  background-color: var(--vc-pgn-active-color);
  //}
}
</style>
