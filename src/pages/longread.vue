<script setup lang="ts">
import comments from '~/data/comments'
</script>

<template lang="pug">
Block01Section(m="!t-0")
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

Block04Section
CommentSection(:dude="comments[7]")
hr.w-50.inline-flex
CommentSection(:dude="comments[8]")
hr.w-50.inline-flex
CommentSection(:dude="comments[9]")
hr.w-50.inline-flex
CommentSection(:dude="comments[10]")

Block05Section
CommentSection(:dude="comments[11]")
hr.w-50.inline-flex
CommentSection(:dude="comments[12]")
hr.w-50.inline-flex
CommentSection(:dude="comments[13]")
hr.w-50.inline-flex
CommentSection(:dude="comments[14]")
hr.w-50.inline-flex
CommentSection(:dude="comments[15]")
hr.w-50.inline-flex
CommentSection(:dude="comments[16]")
hr.w-50.inline-flex
CommentSection(:dude="comments[17]")
hr.w-50.inline-flex
CommentSection(:dude="comments[18]")

div.h-100
//.bg-red-100
</template>
