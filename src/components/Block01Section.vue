<script setup lang="ts">
import { block1 } from '~/data/slides'
const { t } = useI18n()
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    h2 {{t('block01.title')}}
    hr.w-20.inline-flex

    p.mb-20 {{t('block01.desc')}}
    Slider(:settings="{itemsToShow: 1}" :slides="block1" :slideStyle="{height: '600px'}")

    div.quotes(v-html="t('block01.quotes')")
</template>

<style lang="scss">

</style>
