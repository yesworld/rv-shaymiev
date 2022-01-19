<script setup lang="ts">
import comments from '~/data/comments'
const dude = comments[0]
</script>

<template lang="pug">
section.comment.pt-5.flex-center
  div.grid.grid-cols-3.gap-10
    div.avatar
      img.rounded-full(:src="dude.src")
      b {{dude.name}}
      p {{dude.position}}

    div.text.col-span-2
      p {{dude.text}}
</template>

<style lang="scss">
.comment {
  > div {
    @apply w-9/12;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    b {
      @apply text-4xl m-5;
    }
  }
  .text {
    white-space: break-spaces;
    text-align: justify;
    //text-indent: 50px;
  }
}
</style>
