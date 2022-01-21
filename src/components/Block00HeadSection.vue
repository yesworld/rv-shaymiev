<script setup lang="ts">
const { t } = useI18n()
</script>

<template lang="pug">
header
  a(href="https://realnoevremya.ru/" target="_blank")
    div.logo
  div.sh-image

  div.description.h-full(sm="w-10\/12", md="w-7\/12")
    div(m="x-10")
      h1 {{t('block-head.title')}}
      hr.w-20
      h3 {{t('block-head.desc')}}
</template>

<style lang="scss">
header {
  height: 100vh;
  position: relative;
  background: url('/images/003_1.jpg') no-repeat;
  background-size: cover;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 1000;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .sh-image {
    @apply w-7/12;

    min-height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;

    background: url('/images/shaymiev.png') no-repeat 80% 100%;
    background-size: contain;
  }
}

.logo {
  background: url('/images/logo.svg') no-repeat;
  z-index: 10000;
  position: relative;
  top: 15px;
  left: 25px;
  width: 150px;
  height: 32px;
}

@media (max-width: 900px) {
  .sh-image {

  }
}
</style>
