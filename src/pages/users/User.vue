<template>
  <div class="bgc">
    <user-header></user-header>
    <user-content></user-content>
    <div>
      <router-link
        tag="div"
        to="/user"
        class="header-abs"
        v-show="showAbs"
      >
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
      >
        <router-link to="/user">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        我的消息
      </div>
    </div>
    <div style="height: 2000px;"></div>
  </div>
</template>

<script>
import UserHeader from './components/Header'
import UserContent from './components/Content'
export default {
  name: 'User',
  components: {
    UserHeader,
    UserContent
  },
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
  .bgc
    background-color #F6F6F6
    height: 100%
    width: 100%
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
