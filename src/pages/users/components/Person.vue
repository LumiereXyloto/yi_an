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

    <div v-show="showBlock">
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
      <div class="photo-button">
        <span class="upload-text">上传证件</span>
        <input style="opacity:0" type="file" ref="file" name="file" accept="image/png,image/jpg,image/jpeg" @change="upload()">
      </div>
      <div class="change-button" @click="showBlock=!showBlock">修改个人资料</div>
      <router-link to="/change">
        <div class="change-button">修改账户密码</div>
      </router-link>
    </div>

    <div v-show="!showBlock">
      <div class="show-block1">
        <div class="title1">我的个人资料</div>
        <!-- <div class="content-wrapper1">
          <div class="item-title1">学校</div>
          <input class="item-detail1" type="text" :placeholder="list.school" v-model="this.changeList.school">
        </div>
        <hr> -->
        <div class="content-wrapper1">
          <div class="item-title1">姓名</div>
          <input class="item-detail1" type="text" :placeholder="list.studentName"  v-model="changeList.studentName">
        </div>
        <hr>
        <div class="content-wrapper1">
          <div class="item-title1">性别</div>
          <input class="item-detail1" type="text" :placeholder="list.studentSex"  v-model="changeList.studentSex">
        </div>
        <hr>
        <div class="content-wrapper1">
          <div class="item-title1">电话</div>
          <input class="item-detail1" type="text" :placeholder="list.studentPhone"  v-model="changeList.studentPhone">
        </div>
        <hr>
        <div class="content-wrapper1">
          <div class="item-title1">联系</div>
          <input class="item-detail1" type="text" :placeholder="list.studentContactWay" v-model="changeList.studentContactWay">
        </div>
        <hr>
      </div>
      <div class="change-button1" @click="changeInfo()">确定修改</div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
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
      showBlock: true,
      list: {
        school: '重庆邮电大学',
        stuentId: '740207968@qq.com',
        studentName: '李博文',
        studentSex: '男',
        studentPhone: '18723287690',
        studentContactWay: 'Reaper622'
      },
      changeList: {
        school: '',
        studentName: '',
        studentSex: '',
        studentPhone: '',
        studentContactWay: ''
      },
      sex: ''
    }
  },
  methods: {
    getUserInfo () {
      axios.post('http://yian.our16.top:8080/yian/student/getPersonalInfor.do')
        .then((res) => {
          console.log('用户信息', res.data.data)
          this.list = res.data.data
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
    },
    changeInfo () {
      if (this.changeList.studentName === '') {
        this.changeList.studentName = this.list.studentName
      }
      if (this.changeList.studentSex === '') {
        this.changeList.studentSex = this.list.studentSex
      }
      if (this.changeList.studentPhone === '') {
        this.changeList.studentPhone = this.list.studentPhone
      }
      if (this.changeList.studentContactWay === '') {
        this.changeList.studentContactWay = this.list.studentContactWay
      }
      if (this.changeList.studentSex === '男') {
        this.sex = '1'
      } else if (this.changeList.studentSex === '女') {
        this.sex = '0'
      } else {
        console.log('性别转换错误')
      }
      console.log(this.changeList)
      axios.post('http://yian.our16.top:8080/yian/student/updateStduentInfor.do', qs.stringify({
        school: '10617',
        studentName: this.changeList.studentName,
        studentSex: this.sex,
        studentPhone: this.changeList.studentPhone,
        studentContactWay: this.changeList.studentContactWay
      }))
        .then((res) => {
          this.$layer.msg(res.data.msg)
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
    this.getUserInfo()
  },
  activated () {
    console.log(111)
    window.addEventListener('scroll', this.handleScroll)
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
  .photo-button
    position relative
    text-align center
    margin 0 1.5rem
    margin-top 1.2rem
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
  .change-button
    text-align center
    margin 0 1.5rem
    margin-top .4rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem
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
    margin-top 1.6rem
    height .6rem
    line-height .6rem
    background-color #FF5B5B
    color #ffffff
    border-radius .14rem
</style>
