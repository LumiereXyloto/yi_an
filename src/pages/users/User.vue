<template>
  <div>
    <user-header></user-header>
    <user-content></user-content>
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
  // .bgc
  //   background-color #F6F6F6
  //   height: 100%
  //   width: 100%
</style>
