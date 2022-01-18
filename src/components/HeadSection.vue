<script setup lang="ts">
// import shaymiev from '~/asserts/images/shaymiev.png'
</script>

<template lang="pug">
header(grid="~ cols-1 md:cols-2")
  div(m="x-4") qwrqrwrwerwr wer wr wer
  div.image(m="x-4")
    div
</template>

<style lang="scss">
header {
  height: 100vh;
  position: relative;
  background: url('~/asserts/images/003_1.jpg') no-repeat;
  background-size: cover;

  .image {
    > div {
      @apply w-full h-full;
      background: url('~/asserts/images/shaymiev.png') no-repeat;
      background-size: 77%;
      background-position: 80% 100%;
    }
  }
}
</style>
