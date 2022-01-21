<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template lang="pug">
button.btn(:title="t('button.toggle-langs')" @click="toggleLocales")
  carbon-language
  | {{t('button.short-lang')}}
</template>

<style lang='scss'>
button.btn {
  position: fixed;
  bottom: 20px;
  right: 25px;
  padding-right: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 20000;

  > svg {
    font-size: 25px;
    margin-right: 15px;
  }
}
</style>
