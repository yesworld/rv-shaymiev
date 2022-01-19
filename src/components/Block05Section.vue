<script setup lang="ts">
import { block5 } from '~/data/slides'
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block5")
</template>

<style lang="scss">

</style>
