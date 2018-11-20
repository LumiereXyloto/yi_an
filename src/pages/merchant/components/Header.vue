<template>
  <div>
    <div class="header">
      <span>商家中心</span>
      <span class="publish" @click="publish">发布</span>
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
  name: 'CityHeader',
  data () {
    return {
      showLayer: true
    }
  },
  methods: {
    publish () {
      this.$router.replace('/publish')
    }
  }
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
    background: -webkit-linear-gradient(
    left,$bgColor,#1C8DFF,#0B85FF,#007BF7
    )
    font-size: .32rem
    .publish
      position absolute
      left 0.2rem
      font-size .26rem
    .exist
      position absolute
      right 0.2rem
      font-size .26rem
  .color-block
    width 100%
    height 1.3rem
    background: -webkit-linear-gradient(
    left,$bgColor,#1C8DFF,#0B85FF,#007BF7
    )
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
