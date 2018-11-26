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
        <div class="item-title">姓名</div>
        <div class="item-detail">{{merchantInfo.name}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">电话</div>
        <div class="item-detail">{{merchantInfo.phone}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">联系</div>
        <div class="item-detail">{{merchantInfo.QQorWX}}</div>
      </div>
      <hr>
      <div class="content-wrapper">
        <div class="item-title">单位</div>
        <div class="item-detail">{{merchantInfo.unit}}</div>
      </div>
      <hr>
    </div>
    <div class="photo-button">
      <span class="upload-text">上传证件</span>
      <input style="opacity:0" type="file" ref="file" name="file" accept="image/png,image/jpg,image/jpeg" @change="upload()">
    </div>
    <router-link to="/merchant/changeinfo">
      <div class="changeInfo-button">修改个人资料</div>
    </router-link>
    <router-link to="/merchant/changepsw">
      <div class="changePsw-button">修改账户密码</div>
    </router-link>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InfoHeader',
  data () {
    return {
      logoUrl: './static/images/logo.png',
      merchantInfo: {}
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
    },
    upload () {
      let _this = this
      console.log('confirm upload')
      let file = this.$refs.file.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      let formData = new FormData()
      formData.append('photo', file)
      reader.onload = function (e) {
        axios.post('http://yian.our16.top:8080/yian/account/uploadPhoto.do', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
          .then(res => {
            console.log(res)
            if (res.data.status === 1) {
              _this.$layer.closeAll()
              _this.$layer.msg('上传成功')
            } else {
              _this.$layer.closeAll()
              _this.$layer.msg('似乎出现了问题')
            }
          })
      }
    }
  },
  mounted () {
    let _this = this
    axios.post('http://yian.our16.top:8080/yian/merchant/showInfo.do')
      .then(res => {
        _this.merchantInfo = res.data.data
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
    margin-top 1.2rem
    margin-bottom 1rem
    background-color #fff
    .title
      padding 0 .2rem .4rem .2rem
      border-bottom 1px solid #E3E3E3
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
  .photo-button
    position relative
    text-align center
    margin 0 1.5rem
    margin-top .7rem
    height .6rem
    line-height .6rem
    background-color #F9F9F9
    color #007CF9
    border-radius .14rem
    border 1px solid #E4E4E4
    .upload-text
      position absolute
      top 0
      left 0
      right 0
  .changeInfo-button
    text-align center
    margin 0 1.5rem
    margin-top .3rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border 1px solid #DFDFDF
    border-radius .14rem
  .changePsw-button
    text-align center
    margin 0 1.5rem
    margin-top .3rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem
</style>
