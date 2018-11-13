<template>
  <div class="bgi">
    <div>
      <router-link
        tag="div"
        to="/user"
        class="header-abs"
        v-show="showAbs"
      >
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
    </div>

    <div class="banner"></div>
    <div class="show-block">
      <div class="title">我的个人资料</div>
      <div class="content-wrapper">
        <div class="item-title">学校</div>
        <div class="item-detail">{{list.school}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">学号</div>
        <div class="item-detail">{{list.studentId}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">姓名</div>
        <div class="item-detail">{{list.studentName}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">性别</div>
        <div class="item-detail">{{list.studentSex}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">电话</div>
        <div class="item-detail">{{list.studentPhone}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">联系</div>
        <div class="item-detail">{{list.studentContactWay}}</div>
      </div>
      <hr>
    </div>
    <router-link to="/change">
      <div class="change-button">修改个人资料</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/assets/eventBus.js'
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      list: {
        school: '重庆邮电大学',
        studentId: '18723287690',
        studentName: '李博文',
        studentSex: '男',
        studentPhone: '18723287690',
        studentContactWay: 'Reaper622'
      }
    }
  },
  methods: {
    getUserInfo () {
      axios.post('http://yian.our16.top:8080/yian/student/getPersonalInfor.do', {
        withCredentials: true
      })
        .then((res) => {
          console.log(res)
        })
    },
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
    this.getUserInfo()
    bus.$emit('userInfo', this.list)
    console.log('oringin', this.list)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
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
  .banner
    height 2.16rem
    background-color #A6DCFD
  .show-block
    background-color #fff
    .title
      margin-top .4rem
      margin-bottom .2rem
      padding .1rem .2rem
      border-bottom 1px solid #D7D7D7
      text-align center
    .content-wrapper
      display flex
      justify-content space-between
      padding .1rem .8rem
      .item-title
        font-size .3rem
        margin-top .2rem
      .item-detail
        font-size .3rem
        margin-top .2rem
  .change-button
    position relative
    bottom -1.5rem
    text-align center
    margin 0 1.5rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem
</style>
