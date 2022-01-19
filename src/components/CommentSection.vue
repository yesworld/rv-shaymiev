<script setup lang="ts">
defineProps({
  dude: {
    type: Object,
    required: true,
  },
})
</script>

<template lang="pug">
section.comment.flex-center
  div.grid.grid-cols-1.gap-10(md="grid-cols-3")
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
    align-items: center;

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
