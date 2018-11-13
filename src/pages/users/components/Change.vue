<template>
  <div class="bgi">
    <div>
      <router-link
        tag="div"
        to="/person"
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
        <input class="item-detail" type="text" :placeholder="list.school">
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">学号</div>
        <input class="item-detail" type="text" :placeholder="list.studentId">
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">姓名</div>
        <input class="item-detail" type="text" :placeholder="list.studentName">
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">性别</div>
        <input class="item-detail" type="text" :placeholder="list.studentSex">
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">电话</div>
        <input class="item-detail" type="text" :placeholder="list.studentPhone">
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">联系</div>
        <input class="item-detail" type="text" :placeholder="list.studentContactWay">
      </div>
      <hr>
    </div>
    <div class="change-button">确定修改</div>
  </div>
</template>

<script>
import bus from '@/assets/eventBus.js'
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      list: {}
    }
  },
  activated () {
    bus.$on('userInfo', (listFrom) => {
      // console.log(listFrom)
      this.list = listFrom
    })
    console.log('placeholder', this.list)
  },
  disactivated () {
    bus.$off()
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
    background: rgba(0, 0, 0, .8)
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
        border-bottom 1px solid #cccccc
  .change-button
    position relative
    bottom -1.5rem
    text-align center
    margin 0 1.5rem
    height .6rem
    line-height .6rem
    background-color #FF5B5B
    color #ffffff
    border-radius .14rem
</style>
