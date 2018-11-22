<template>
  <div>
    <div class="header-fixed">
      <router-link to="/merchant">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      兼职详情
      <span class="list" @click="getList()">名单</span>
    </div>
    <div class="item">
      <div class="item-title">{{list.jobSummary}}</div>
      <div class="item-location">{{list.adress}}</div>
      <div class="row-wrapper">
        <span class="grey">基本工资：</span>
        <span class="black">{{list.reward}}元/{{list.rewardType}}</span>
      </div>
      <div class="color-block"></div>
      <div class="row-wrapper">
        <span class="grey">兼职类型：</span>
        <span class="black">{{list.jobType}}</span>
      </div>
      <div class="row-wrapper">
        <span class="grey">招聘人数：</span>
        <span class="black">{{list.hireNum}}</span>
      </div>
      <div class="row-wrapper">
        <span class="grey">已聘人数：</span>
        <span class="black">{{list.nowNum}}</span>
      </div>
      <div class="color-block"></div>
      <div class="detail-title">工作内容：</div>
      <div class="detail">{{list.detail}}</div>
      <div class="tip">请保持实际工作内容的真实性，若实际工作内容与描述不符您将可能受到用户举报</div>
      <div class="color-block"></div>
      <div class="row-wrapper">
        <span class="grey">兼职状态：</span>
        <span class="black">{{status}}</span>
      </div>
    </div>
    <div class="null-block"></div>
    <div class="fixed-wrapper">
      <div class="button-wrapper">
        <div class="stop-button" @click="stopItem()">{{stopText}}</div>
        <div class="delete-button" @click="deleteItem()">{{deleteText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'DetailList',
  data () {
    return {
      list: {},
      status: '',
      jobId: '',
      stopText: '停止招聘',
      deleteText: '删除招聘'
    }
  },
  methods: {
    sendRequest () {
      axios.post('http://132.232.56.186:8080/yian/merchant/showDetailJobInfo.do', qs.stringify({
        jobId: this.$route.params.jobId
      }), {
        withCredentials: true
      })
        .then((res) => {
          console.log(res)
          this.list = res.data.data
          this.transformStatus()
        })
    },
    transformStatus () {
      if (this.list.status === 0) {
        this.status = '待审核'
      } else if (this.list.status === 1) {
        this.status = '正在展示(学生可见)'
      } else if (this.list.status === 2) {
        this.status = '未通过审核'
      } else if (this.list.status === 3) {
        this.status = '满员'
      } else if (this.list.status === 4) {
        this.status = '已停止招聘'
        this.stopText = '已停止'
      }
    },
    stopItem () {
      let _this = this
      if (this.list.status !== 4) {
        const index = this.$layer.confirm('您确定要停止招聘吗？', () => {
          this.$layer.closeAll()
          axios.post('http://yian.our16.top:8080/yian/merchant/changeJobInfoStatus.do', qs.stringify({
            jobId: this.$route.params.jobId,
            action: 2
          }))
            .then(res => {
              if (res.data.status === 1) {
                _this.stopText = '已停止'
                _this.status = '已停止招聘'
              }
            })
        }, () => {
          this.$layer.closeAll()
        })
      }
    },
    deleteItem () {
      let _this = this
      const index = this.$layer.confirm('您确定要删除该招聘吗？', () => {
        this.$layer.closeAll()
        axios.post('http://yian.our16.top:8080/yian/merchant/changeJobInfoStatus.do', qs.stringify({
          jobId: this.$route.params.jobId,
          action: 1
        }))
          .then(res => {
            if (res.data.status === 1) {
              _this.$layer.closeAll()
              _this.$layer.msg('删除成功')
              _this.$router.replace('/merchant')
            }
          })
      }, () => {
        this.$layer.closeAll()
      })
    },
    getList () {
      this.$router.push({
        path: '/merchant',
        name: 'GetList',
        params: {
          jobId: this.$route.params.jobId
        }
      })
    }
  },
  mounted () {
    this.sendRequest()
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
    .list
      font-size: .32rem
      position: absolute
      top: 0
      right: .2rem
      color: $bgColor
      font-weight 400
  .item-title
    font-size .38rem
    padding .4rem .4rem
    margin-top .86rem
  .item-location
    font-size .24rem
    color grey
    padding-left .4rem
    padding-bottom .1rem
    border-bottom 1px solid #E9E9E9
  .row-wrapper
    padding .2rem .4rem
    .grey
      font-size .28rem
      color #979797
    .black
      font-size .32rem
  .color-block
    height .25rem
    background-color #EFEFF4
  .detail-title
    margin .3rem .4rem .2rem .4rem
    border-left .1rem solid $bgColor
    padding-left .2rem
    font-size .32rem
    color #0F87FF
  .detail
    padding .1rem .4rem
    font-size .28rem
    line-height .5rem
  .tip
    padding 0 .4rem .3rem .4rem
    font-size .24rem
    font-weight bold
  .null-block
    height .86rem
  .fixed-wrapper
    position fixed
    bottom 0
    width 100%
    .button-wrapper
      display flex
      height .86rem
      line-height .86rem
      .stop-button
        width 50%
        flex-grow 1
        text-align center
        color $bgColor
        border-top 1px solid #E8E8E8
        border-bottom 1px solid #E8E8E8
      .delete-button
        width 50%
        flex-grow 1
        text-align center
        color #ffffff
        background-color $bgColor
        border-top 1px solid $bgColor
        border-bottom 1px solid $bgColor
</style>
