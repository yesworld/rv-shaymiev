<script setup lang="ts">
const data = [
  { src: '/images/block3/01_25.10.1997_Закладка камня и начало строительства Нижнекамского Нефтеперерабатывающего завода.jpg' },
  { src: '/images/block3/02_10.10.2003 г.Закладка капсулы по строительству завода бензинов.jpg' },
  { src: '/images/block3/03_фото М.Козловский.jpg' },
  { src: '/images/block3/04_11 октября 2006г..JPG' },
]
</script>

<template lang="pug">
section.with-slider.pt-5.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="data")

    p.mb-10 «Мы сделали ставку на инновационную экономику. Это наш стратегический выбор. Необходимо приложить усилия для того, чтобы вести углубленную переработку нефти и&nbsp;
      a(href="https://prav.tatarstan.ru/index.htm/news/30505.htm?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews%2Fsearch%3Ftext%3D" target="_blank" rel="nofollow noindex noopener") отойти
      |  от экспортно ориентированной экономики»
</template>

<style lang="scss">
.with-slider {
  > div {
    @apply w-9/12;
  }
}
</style>
