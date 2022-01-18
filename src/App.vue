<template lang="pug">
HeadSection

main(font-sans)
  h1 test theme style
  router-view
  Footer
</template>

<style lang='scss'>
main {
  @apply text-center text-gray-900 dark:text-gray-200
  text-align: center
}
</style>
