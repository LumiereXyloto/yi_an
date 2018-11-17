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
        我的收藏
      </div>
    </div>
    <div class="banner"></div>
    <div class="job-type">
      <div v-for="(item, index) in typeList" :key="index">
        <div>{{item.typeName}}</div>
      </div>
    </div>
    <div class="reward-type"></div>

    <div class="show-block">
      <div class="title">我的收藏(3)</div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <hr>
      </div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <hr>
      </div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <hr>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      typeList: []
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
    axios.post('http://yian.our16.top:8080/yian/jobTypeList/getParttimeType.do')
      .then(res => {
        let arr = res.data.data
        let filterList = arr.slice(1)
        this.typeList = filterList
        console.log(this.typeList)
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
    height 2.16rem
    background-color #A6DCFD
  .show-block
    background-color #fff
    .title
      margin-top .4rem
      padding .1rem .2rem
      border-bottom 1px solid #D7D7D7
    .content-wrapper
      padding .1rem .4rem
      .item-title
        font-size .3rem
        padding-top .1rem
      .item-detail
        font-size .24rem
        padding-top .1rem
  .content
    height 2000px
</style>
