<template>
  <div>
    <div class="header">
      修改资料
      <router-link to="/merchant/info">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <div class="show-block1">
      <div class="title1">个人资料</div>
      <div class="content-wrapper1">
        <div class="item-title1">姓名</div>
        <input class="item-detail1" type="text" :placeholder="merchantInfo.name"  v-model="changeList.name">
      </div>
      <hr>
      <div class="content-wrapper1">
        <div class="item-title1">电话</div>
        <input class="item-detail1" type="text" :placeholder="merchantInfo.phone"  v-model="changeList.phone">
      </div>
      <hr>
      <div class="content-wrapper1">
        <div class="item-title1">联系</div>
        <input class="item-detail1" type="text" :placeholder="merchantInfo.QQorWX"  v-model="changeList.QQorWX">
      </div>
      <hr>
      <div class="content-wrapper1">
        <div class="item-title1">单位</div>
        <input class="item-detail1" type="text" :placeholder="merchantInfo.unit" v-model="changeList.unit">
      </div>
      <hr>
    </div>
    <div class="change-button1" @click="changeInfo()">确定修改</div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  name: 'ChangeInfo',
  data () {
    return {
      merchantInfo: {},
      changeList: {
        name: '',
        phone: '',
        QQorWX: '',
        unit: ''
      }
    }
  },
  mounted () {
    let _this = this
    axios.post('http://equator8848.xyz:8080/yian/merchant/showInfo.do')
      .then(res => {
        _this.merchantInfo = res.data.data
      })
  },
  methods: {
    changeInfo () {
      let _this = this
      if (this.changeList.name === '') {
        this.changeList.name = this.merchantInfo.name
      }
      if (this.changeList.phone === '') {
        this.changeList.phone = this.merchantInfo.phone
      }
      if (this.changeList.QQorWX === '') {
        this.changeList.QQorWX = this.merchantInfo.QQorWX
      }
      if (this.changeList.unit === '') {
        this.changeList.unit = this.merchantInfo.unit
      }
      console.log(this.changeList)
      axios.post('http://equator8848.xyz:8080/yian/merchant/changeContactInfo.do', qs.stringify({
        phone: this.changeList.phone,
        name: this.changeList.name,
        QQorWX: this.changeList.QQorWX,
        unit: this.changeList.unit
      }))
        .then(res => {
          if (res.data.status === 1) {
            _this.$layer.closeAll()
            _this.$layer.msg('修改成功')
            _this.$router.replace('/merchant/info')
          }
        })
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
      margin-top .3rem
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
