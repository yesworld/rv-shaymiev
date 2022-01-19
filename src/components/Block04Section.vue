<script setup lang="ts">
import { block4 } from '~/data/slides'
</script>

<template lang="pug">
section.with-slider.flex-center
  div
    Slider.mb-10(:settings="{itemsToShow: 1}" :slides="block4")

    div.quotes
      p «Энергетика всегда на виду, нужно всегда опережать время, потому что без энергетических мощностей, без их роста ни о каком развитии экономики не может быть и&nbsp;
        a(href="https://eepir.ru/new/opravdyvaet-nadeghdy/" target="_blank" rel="nofollow noindex noopener") речи
        | »
      p.mb-10 «Я&nbsp;
        a(href="https://www.tatar-inform.ru/news/mintimer-shaymiev-razvitie-energetiki-nailuchshiy-pokazatel-tehnicheskogo-progressa" target="_blank" rel="nofollow noindex noopener") считаю
        |  , что развитие энергетики — наилучший показатель технического прогресса»
</template>

<style lang="scss">
.with-slider {
  @apply bg-blue text-white;
  padding: 30px 0;
  margin: 50px 0;

  > div {
    @apply w-9/12;
  }
}
</style>
