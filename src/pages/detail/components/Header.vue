<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-title">
          兼职详情
        </div>
      </div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      兼职详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header
    display: flex
    line-height: $headerHeight
    .header-left
      width: .64rem
      float: left
      color $bgColor
      font-weight 600
      .back-icon
        text-align: center
        font-size: .4rem
    .header-title
      flex: 1
      height: .86rem
      line-height: .86rem
      margin-right: .64rem
      font-size: .36rem
      color: black
      text-align: center
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
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: #ffffff
</style>
