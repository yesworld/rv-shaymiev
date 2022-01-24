<script setup lang="ts">
import { block3 } from '~/data/slides'
const { t } = useI18n()
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block3")

    div.quotes(v-html="t('block03.quotes')")
</template>

<style lang="scss">

</style>
