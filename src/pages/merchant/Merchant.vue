<template>
  <div>
    <merchant-header></merchant-header>
    <merchant-published></merchant-published>
  </div>
</template>

<script>
import MerchantHeader from './components/Header'
import MerchantPublished from './components/Published'
export default {
  name: 'User',
  components: {
    MerchantHeader,
    MerchantPublished
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

</style>
