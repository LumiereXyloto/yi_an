<template>
  <div>
    <div class="header-fixed">
      <div class="iconfont header-fixed-back" @click="back()">&#xe624;</div>
      报名名单
    </div>
    <ul class="show-block">
      <li v-for="item in studentList" :key="item.studentId">
        <div class="row">
          <span class="title">姓名</span>
          <span class="content">{{item.studentName}}</span>
        </div>
        <div class="row">
          <span class="title">性别</span>
          <span class="content">{{item.studentSex}}</span>
        </div>
        <div class="row">
          <span class="title">学校</span>
          <span class="content">{{item.studentSchool}}</span>
        </div>
        <div class="row">
          <span class="title">电话</span>
          <span class="content">{{item.studentPhone}}</span>
        </div>
      </li>
    </ul>
    <div class="button" @click="getList()">导出名单</div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'GetList',
  data () {
    return {
      jobId: '',
      studentList: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    getList () {
      this.$layer.confirm('您确定要导出名单吗？', () => {
        this.$layer.closeAll()
        axios.post('http://yian.our16.top:8080/yian/merchant/getSignInfo.do', qs.stringify({
          jobId: this.jobId
        }))
      }, () => {
        this.$layer.closeAll()
      })
    }
  },
  mounted () {
    this.jobId = this.$route.params.jobId
    axios.post('http://yian.our16.top:8080/yian/merchant/showApplyStudent.do', qs.stringify({
      jobId: this.jobId
    }))
      .then(res => {
        console.log(res)
        this.studentList = res.data.data
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
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
    color: #272727
    background: #ffffff
    font-size: .32rem
    border-bottom 1px solid #E9E9E9
    border-top 1px solid #E9E9E9
    .header-fixed-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: $bgColor
      font-weight 600
  .show-block
    margin 1.2rem .8rem 0 .8rem
  .show-block li
    padding-bottom .3rem
    border-bottom 1px solid #E8E8E8
    .row
      height .6rem
      line-height .6rem
      .title
        display inline-block
        color #969696
      .content
        display inline-block
        margin-left 0.6rem
        font-size .3rem
  .button
    text-align center
    margin 0 1.5rem
    margin-top 1.2rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem
</style>
