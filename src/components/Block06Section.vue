<script setup lang="ts">
const { t } = useI18n()
</script>

<template lang="pug">
section.with-slider.flex-center
  div.grid.grid-cols-1.gap-10(md="grid-cols-5")
    div.col-span-3
      img(src="/images/041ec66b682a00c3.xl.jpg")
    div.col-span-2.text
      h2 {{t('block06.title')}}
      p {{t('block06.desc')}}
      a(href="https://realnoevremya.ru/stories/156") {{t('button.read')}}
</template>

<style lang="scss">
.with-slider{
  .text{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    a {
      @apply text-3xl;
    }
  }
}
</style>
