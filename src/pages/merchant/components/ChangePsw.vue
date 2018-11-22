<template>
  <div>
    <div class="header">
      修改密码
      <router-link to="/merchant/info">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <div class="show-block1">
      <div class="title1"></div>
      <div class="content-wrapper1">
        <div class="item-title1">原密码</div>
        <input class="item-detail1" type="password" v-model="oldPSw">
      </div>
      <hr>
      <div class="content-wrapper1">
        <div class="item-title1">新密码</div>
        <input class="item-detail1" type="password" v-model="newPsw">
      </div>
      <hr>
    </div>
    <div class="change-button1" @click="changePsw()">确定修改</div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  name: 'ChangeInfo',
  data () {
    return {
      oldPSw: '',
      newPsw: ''
    }
  },
  methods: {
    changePsw () {
      let _this = this
      if (this.oldPSw !== '' && this.newPsw !== '') {
        axios.post('http://yian.our16.top:8080/yian/account/changePsw.do', qs.stringify({
          oldPsw: this.oldPSw,
          newPsw: this.newPsw
        }))
          .then(res => {
            console.log(res)
            _this.$layer.closeAll()
            _this.$layer.msg(res.data.msg)
            if (res.data.status === 1) {
              _this.$router.replace('/merchant/info')
            }
          })
      } else {
        this.$layer.closeAll()
        this.$layer.msg('输入不能为空')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
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
  .show-block1
    background-color #fff
    .title1
      margin-top 1rem
      margin-bottom .2rem
      padding .1rem .2rem
      border-bottom 1px solid #D7D7D7
      text-align center
    .content-wrapper1
      display flex
      justify-content space-between
      padding .1rem .8rem
      .item-title1
        font-size .3rem
        margin-top .2rem
      .item-detail1
        font-size .3rem
        margin-top .2rem
        border-bottom 1px solid #cccccc
  .change-button1
    text-align center
    margin 0 1.5rem
    margin-top 1.6rem
    height .6rem
    line-height .6rem
    background-color #FF5B5B
    color #ffffff
    border-radius .14rem
</style>
