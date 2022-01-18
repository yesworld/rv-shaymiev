<script setup lang="ts">
// import shaymiev from '~/asserts/images/shaymiev.png'
</script>

<template lang="pug">
header(grid="~ cols-1 md:cols-2")
  div.description(m="x-4")
    div
      h1 Заголовок 2
      hr.w-20
      h3 Первому президенту республики исполняется 85 лет. Роль Минтимера Шаймиева в сохранении и становлении промышленности и экономики РТ огромна. Об этом - в исторических кадрах и цитатах

  div.image(m="x-4")
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
      @apply w-10/12;
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
