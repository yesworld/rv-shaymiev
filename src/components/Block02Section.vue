<script setup lang="ts">
import { block2 } from '~/data/slides'
const { t } = useI18n()
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block2")

    div.quotes(v-html="t('block02.quotes')")
</template>

<style lang="scss">

</style>
