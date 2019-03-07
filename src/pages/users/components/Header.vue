<template>
  <div>
    <div class="header">
      个人中心
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      <span class="exist" @click="signOut">注销</span>
    </div>
    <div class="color-block"></div>
    <div class="img-block">
      <img class="img" :src="logoUrl" alt="gg">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CityHeader',
  data () {
    return {
      logoUrl: './static/images/logo.png'
    }
  },
  methods: {
    signOut () {
      let _this = this
      this.$layer.closeAll()
      this.$layer.open({
        btn: ['确认', '取消'],
        content: '确认注销？',
        className: 'good luck1',
        shade: true,
        yes (index, $layer) {
          console.log('点击确定')
          axios.get('http://equator8848.xyz:8080/yian/account/logout.do')
            .then(res => {
              console.log(res)
              _this.$layer.closeAll()
              _this.$layer.msg('注销成功')
              _this.$router.replace('/login')
            })
        },
        end () {
          console.log('点击取消')
          _this.$layer.closeAll()
        }
      })
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
