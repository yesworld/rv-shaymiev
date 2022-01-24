<script setup lang="ts">
import { block5En, block5Ru } from '~/data/slides'
const { t, locale } = useI18n()
const slides = computed(() => {
  return locale.value === 'ru' ? block5Ru : block5En
})
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="slides")
</template>

