<script setup lang="ts">
import { block4 } from '~/data/slides'
const { t } = useI18n()
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block4")

    div.quotes(v-html="t('block04.quotes')")
</template>
