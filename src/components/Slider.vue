<script setup lang="ts">
// @ts-ignore
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { defineProps } from 'vue'

const props = defineProps({
  settings: {
    type: Object,
    default: () => ({
      itemsToShow: 2,
      snapAlign: 'center',
    }),
  },
  slides: {
  },
})
</script>

<template>
  <carousel :items-to-show="1" :settings='settings'>
    <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
