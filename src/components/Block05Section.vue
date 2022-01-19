<script setup lang="ts">
import { block5 } from '~/data/slides'
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block5")
</template>

<style lang="scss">
.with-slider {
  @apply bg-blue text-white;
  padding: 30px 0;
  margin: 50px 0;

  > div {
    @apply w-9/12;
  }
}
</style>
