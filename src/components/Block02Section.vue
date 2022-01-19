<script setup lang="ts">
import { block2 } from '~/data/slides'
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block2")

    div.quotes
      p.mb-10 «
        a(href="https://rg.ru/2008/08/27/shaimiev.html" target="_blank" rel="nofollow noindex noopener") Опираясь
        |  на сырьевые ресурсы и традиционно крепкую научную и инженерно-техническую кадровую базу, мы должны формировать новую экономику, диверсифицированную, открытую внешнему миру и способную быть конкурентоспособной в нем»
</template>

<style lang="scss">
.with-slider {
  > div {
    @apply w-9/12;

  }
}
</style>
