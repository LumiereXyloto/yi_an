<template>
  <div>
    <div class="header-fixed">
      <div class="iconfont header-fixed-back" @click="back()">&#xe624;</div>
      兼职详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header-fixed
    position: fixed
    z-index: 2
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #272727
    background: #ffffff
    font-size: .32rem
    border-bottom 1px solid #E9E9E9
    border-top 1px solid #E9E9E9
    .header-fixed-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: $bgColor
      font-weight 600
</style>
