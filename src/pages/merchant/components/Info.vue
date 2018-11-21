<template>
  <div>
    <div class="header">
      个人中心
      <router-link to="/merchant">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      <span class="exist" @click="signOut">注销</span>
    </div>
    <div class="color-block"></div>
    <div class="img-block">
      <img class="img" :src="logoUrl" alt="gg">
    </div>

    <div class="show-block">
      <div class="title">我的个人资料</div>
      <div class="content-wrapper">
        <div class="item-title">学校</div>
        <div class="item-detail">{{list.school}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">学号</div>
        <div class="item-detail">{{list.stuentId}}</div>
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
    <div class="change-button" @click="showBlock=!showBlock">修改个人资料</div>
    <router-link to="/change">
      <div class="change-button">修改账户密码</div>
    </router-link>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InfoHeader',
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
          axios.get('http://yian.our16.top:8080/yian/account/logout.do')
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
  },
  mounted () {
    axios.post('http://132.232.56.186:8080/yian/merchant/showInfo.do')
      .then(res => {
        console.log(res)
      })
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
    text-align center
    margin 0 1.5rem
    margin-top .3rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem
</style>

