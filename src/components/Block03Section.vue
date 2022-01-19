<script setup lang="ts">
import { block3 } from '~/data/slides'
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block3")

    div.quotes
      p.mb-10 «Мы сделали ставку на инновационную экономику. Это наш стратегический выбор. Необходимо приложить усилия для того, чтобы вести углубленную переработку нефти и&nbsp;
        a(href="https://prav.tatarstan.ru/index.htm/news/30505.htm" target="_blank" rel="nofollow noindex noopener") отойти
        |  от экспортно ориентированной экономики»
</template>

<style lang="scss">

</style>
