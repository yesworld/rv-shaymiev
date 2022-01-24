<script setup lang="ts">
import ruComments from '~/data/comments.ru'
import enComments from '~/data/comments.en'
const { locale, t } = useI18n()

const comments = computed(() => {
  return locale.value === 'ru' ? ruComments : enComments
})
</script>

<template lang="pug">
Block01Section(m="!t-0")
CommentSection.pt-10(:dude="comments[0]")
hr.w-50.inline-flex
CommentSection(:dude="comments[1]")

Block02Section
CommentSection(:dude="comments[2]")
hr.w-50.inline-flex
CommentSection(:dude="comments[19]")

Block03Section
CommentSection(:dude="comments[3]")
hr.w-50.inline-flex
CommentSection(:dude="comments[4]")
hr.w-50.inline-flex
CommentSection(:dude="comments[5]")

Block04Section
CommentSection(:dude="comments[6]")
hr.w-50.inline-flex
CommentSection(:dude="comments[7]")
hr.w-50.inline-flex
CommentSection(:dude="comments[8]")
hr.w-50.inline-flex
CommentSection(:dude="comments[9]")

Block05Section
CommentSection(:dude="comments[10]")
hr.w-50.inline-flex
CommentSection(:dude="comments[18]")
hr.w-50.inline-flex
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

Block06Section.mb-0

div.p-5
  i @ {{t('footer.desc')}}
</template>
