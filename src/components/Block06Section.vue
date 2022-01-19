<script setup lang="ts">
import { block4 } from '~/data/slides'

</script>

<template lang="pug">
section.with-slider.flex-center
  div.grid.grid-cols-1.gap-10(md="grid-cols-3")
    div.col-span-2
      img(src="images/041ec66b682a00c3.xl.jpg")
    div.text
      h2 Минтимер Шаймиев в историях
      p Жители Татарстана поделились с «Реальным временем» своими историями о Бабае.
      a(href="https://realnoevremya.ru/stories/156") Читать
</template>

<style lang="scss">
.with-slider .text{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    @apply text-3xl;
  }
}
</style>
