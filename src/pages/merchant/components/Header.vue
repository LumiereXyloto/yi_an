<template>
  <div>
    <div class="header">
      <span>商家中心</span>
      <span class="publish" @click="publish">发布</span>
      <span class="merchant-info" @click="gotoInfo">个人</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchantHeader',
  data () {
    return {
      showLayer: true
    }
  },
  methods: {
    publish () {
      this.$router.replace('/publish')
    },
    gotoInfo () {
      this.$router.replace('/merchant/info')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header
    position: fixed
    top 0
    z-index 99
    width 100%
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: -webkit-linear-gradient(
    left,$bgColor,#1C8DFF,#0B85FF,#007BF7
    )
    font-size: .36rem
    .publish
      position absolute
      left 0.2rem
      font-size .3rem
    .merchant-info
      position absolute
      right 0.2rem
      font-size .3rem
</style>
