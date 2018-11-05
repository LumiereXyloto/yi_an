<template>
  <div>
    <div class="header">
      个人中心
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      <span class="exist">注销</span>
    </div>
    <div class="color-block"></div>
    <div class="img-block">
      <img class="img" src="@/assets/images/logo.png" alt="gg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: #ffffff
    .exist
      position absolute
      right 0.2rem
      font-size .26rem
  .color-block
    width 100%
    height 1.3rem
    background-color $bgColor
  .img-block
    display flex
    justify-content center
    .img
      background-color #ffffff
      border-radius .9rem
      width 1.8rem
      height 1.8rem
      position absolute
      top 1.26rem
</style>
