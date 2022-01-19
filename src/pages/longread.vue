<script setup lang="ts">
import comments from '~/data/comments'
</script>

<template lang="pug">
Block01Section
CommentSection.pt-10(:dude="comments[0]")
hr.w-50.inline-flex
CommentSection(:dude="comments[1]")
Block02Section
CommentSection(:dude="comments[2]")
hr.w-50.inline-flex
CommentSection(:dude="comments[3]")
Block03Section
CommentSection(:dude="comments[5]")
hr.w-50.inline-flex
CommentSection(:dude="comments[6]")

div.h-100.bg-red-100
</template>
