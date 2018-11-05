<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-title">
      易安兼职
    </div>
    <router-link to="/user">
      <div class="header-right">
        个人
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-title
      flex: 1
      height: .86rem
      line-height: .86rem
      margin-left: .2rem
      font-size: .4rem
      color: #ffffff
      text-align: center
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #ffffff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
