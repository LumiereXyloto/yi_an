<template>
  <div class="position-wrapper">
    <div class="flex-wrapper">
      <div class="star">收藏</div>
      <div class="sign-up">立即报名</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .position-wrapper
    position fixed
    bottom 0
    width 100%
    .flex-wrapper
      display flex
      height $headerHeight
      line-height $headerHeight
      .star
        height $headerHeight
        line-height $headerHeight
        color $bgColor
        border-top 1px solid #E8E8E8
        border-bottom 1px solid #E8E8E8
        flex-grow 1
        text-align center
      .sign-up
        height $headerHeight
        line-height $headerHeight
        background-color $bgColor
        color #ffffff
        border-top 1px solid #E8E8E8
        border-bottom 1px solid #E8E8E8
        flex-grow 1
        text-align center
</style>
