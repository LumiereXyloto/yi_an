<template>
  <div>
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
    <div class="show-block1">
      <div class="title1">修改密码</div>
      <div class="content-wrapper1">
        <div class="item-title1">原密码</div>
        <input class="item-detail1" type="password" v-model="oldPsw">
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
axios.defaults.withCredentials = true
export default {
  name: 'Change',
  data () {
    return {
      showAbs: true,
      list: {},
      oldPsw: '',
      newPsw: ''
    }
  },
  methods: {
    changePsw () {
      if (this.oldPsw === '' || this.newPsw === '') {
        this.$layer.closeAll()
        this.$layer.msg('请检查你的输入')
      } else {
        axios.post('http://yian.our16.top:8080/yian/account/changePsw.do', qs.stringify({
          oldPsw: this.oldPsw,
          newPsw: this.newPsw
        }))
          .then(res => {
            console.log(res)
            this.$layer.closeAll()
            this.oldPsw = ''
            this.newPsw = ''
            this.$layer.msg(res.data.msg)
            this.$router.go(-1)
          })
      }
    }
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
  .show-block1
    background-color #fff
    .title1
      margin-top .4rem
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
    margin-top 2rem
    height .6rem
    line-height .6rem
    background-color #FF5B5B
    color #ffffff
    border-radius .14rem
</style>
