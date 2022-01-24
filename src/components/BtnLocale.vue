<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

defineEmits(['changeLocation'])
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template lang="pug">
button.btn.local(:title="t('button.toggle-langs')" @click="toggleLocales")
  carbon-language
  | {{t('button.short-lang')}}

button.btn.theme(:title="t('button.toggle-dark')" @click="toggleDark")
  carbon-moon(v-if="isDark")
  carbon-sun(v-else)
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

  &.local {
    > svg {
      font-size: 25px;
      margin-right: 15px;
    }
  }

  &.theme {
    bottom: 85px;
    font-size: 20px;
  }
}
</style>
