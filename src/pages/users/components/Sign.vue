<template>
  <div>
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
        已经报名
      </div>
    </div>

    <div class="banner">
      <img src="@/assets/images/banner.png" alt="gg">
    </div>

    <div class="block-title">已经报名({{length}})</div>
    <div class="showBlock">
      <ul>
        <router-link
          tag="li"
          v-for="item of signList"
          :key="item.jobId"
          :to="'/detail/' + item.jobId"
        >
          <div>
            <p class="item-title">{{item.title}}</p>
            <p class="item-detail">{{item.jobDetail}}</p>
            <p class="item-status">报名状态：{{item.status}}</p>
            <p class="item-time">报名时间：{{item.signTime}}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      signList: [],
      length: ''
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
  },
  mounted () {
    axios.post('http://yian.our16.top:8080/yian/student/getSignUpParttime.do')
      .then(res => {
        if (res.data.data) {
          console.log(res.data.data)
          this.signList = res.data.data
          this.length = res.data.data.length
        } else {
          this.length = 0
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header-abs
    text-align: center
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .3)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
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
  .banner
    background-color #A6DCFD
  .banner img
    width 100%
  .block-title
    background-color #EEEEEE
    font-size .28rem
    height .8rem
    line-height .8rem
    margin-bottom .2rem
    padding 0 .2rem
  .showBlock
    padding 0 .4rem
    .item-title
      font-size .34rem
      margin-bottom .1rem
      margin-top .2rem
    .item-detail
      color #919191
      font-size .26rem
      margin-bottom .1rem
    .item-status
      color #919191
      font-size .28rem
      margin-top .1rem
    .item-time
      color #919191
      font-size .28rem
      margin-top .1rem
      border-bottom 1px solid #eeeeee
      padding-bottom .1rem
</style>
