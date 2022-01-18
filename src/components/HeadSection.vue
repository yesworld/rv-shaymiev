<script setup lang="ts">
// import shaymiev from '~/asserts/images/shaymiev.png'
</script>

<template lang="pug">
header(grid="~ cols-1 md:cols-2")
  div.description(m="x-4" )
    div
      h1 Первому президенту Татарстана, Госсоветнику республики Минтимеру Шаймиеву 20 января исполнится 85 лет.
      hr.w-20
      h2 Жители Татарстана поделились с «Реальным временем» своими историями о Бабае.

  div.image(m="x-4" ba)
    div

div.logo
</template>

<style lang="scss">
header {
  height: 100vh;
  position: relative;
  background: url('~/asserts/images/003_1.jpg') no-repeat;
  background-size: cover;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      @apply w-9/12;
      display: flex;
      flex-direction: column;
    }
  }

  .image > div {
      @apply w-full h-full;
      background: url('~/asserts/images/shaymiev.png') no-repeat 80% 100%;
      background-size: 77%;
    }
}

.logo {
  background: url('~/asserts/logo.svg') no-repeat;
  position: absolute;
  top: 15px;
  left: 25px;
  width: 150px;
  height: 32px;
}
</style>
