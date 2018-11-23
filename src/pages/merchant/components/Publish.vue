<template>
  <div>
    <div class="header-fixed">
      <div class="iconfont header-fixed-back" @click="back()">&#xe624;</div>
      发布兼职
    </div>
    <div class="null-content"></div>
    <div class="content-wrapper1">
      <div class="item-title1">兼职简介</div>
      <input class="item-detail1" type="text" v-model="list.summary">
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">兼职详情</div>
      <textarea class="item-detail1" cols="30" rows="3" v-model="list.details"></textarea>
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">兼职时间</div>
      <input class="item-detail1" type="text" v-model="list.jobTime">
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">兼职地点</div>
      <input class="item-detail1" type="text" v-model="list.address">
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">招聘人数</div>
      <input class="item-detail1" type="text" v-model="list.hireNum">
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">兼职类型</div>
      <div id="trigger5" class="item-detail2">&nbsp;</div>
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">报酬类型</div>
      <div id="trigger4" class="item-detail2">&nbsp;</div>
    </div>
    <hr>
    <div class="content-wrapper1">
      <div class="item-title1">单位报酬</div>
      <input class="item-detail1" type="text" v-model="list.reward">
    </div>
    <hr>
    <div class="change-button" @click="push">发布兼职</div>
  </div>
</template>

<script>
import MobileSelect from 'mobile-select'
import qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'Publish',
  data () {
    return {
      list: {
        summary: '',
        jobTime: '',
        reward: '',
        rewardType: '',
        address: '',
        details: '',
        type: '',
        hireNum: '',
        school: '10617'
      }
    }
  },
  mounted () {
    let _this = this
    var mobileSelect4 = new MobileSelect({// eslint-disable-line
      trigger: '#trigger4',
      title: '选择报酬类型',
      wheels: [
        {data: ['小时', '天', '月']}
      ],
      callback: function (indexArr, data) {
        console.log(data)
        _this.list.rewardType = indexArr[0]
      }
    })
    var mobileSelect5 = new MobileSelect({// eslint-disable-line
      trigger: '#trigger5',
      title: '选择兼职类型',
      wheels: [
        {data: ['其它', '家教', '服务员', '接待员', '安保人员', '推广促销', '翻译', '话务员', '实习生', '收银员']}
      ],
      callback: function (indexArr, data) {
        console.log(indexArr, data)
        _this.list.type = data[0]
      }
    })
  },
  methods: {
    back () {
      this.$router.replace('/merchant')
    },
    // check () {
    //   if (this.list.summary && this.list.jobTime)
    // },
    push () {
      let _this = this
      if (this.list.summary && this.list.jobTime && this.list.reward && this.list.rewardType && this.list.address && this.list.details && this.list.type && this.list.hireNum) {
        axios.post('http://yian.our16.top:8080/yian/merchant/pushJobInfo.do', qs.stringify({
          summary: this.list.summary,
          jobTime: this.list.jobTime,
          reward: this.list.reward,
          rewardType: this.list.rewardType,
          address: this.list.address,
          details: this.list.details,
          jobType: this.list.type,
          hireNum: this.list.hireNum,
          school: '10617'
        }))
          .then(res => {
            if (res.data.status === 1) {
              _this.$layer.closeAll()
              _this.$layer.msg(res.data.msg)
              _this.$router.replace('/merchant')
            }
          })
      } else {
        this.$layer.closeAll()
        this.$layer.msg('填写不符标准')
      }
    }
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
  .null-content
    height 1rem
  .content-wrapper1
      display flex
      justify-content space-between
      padding .1rem .8rem
      align-items center
      .item-title1
        font-size .3rem
        margin-top .2rem
        flex-grow 1
      .item-detail1
        font-size .3rem
        margin-top .2rem
        border-bottom 1px solid #cccccc
        flex-grow 2
      .item-detail2
        font-size .3rem
        margin-top .2rem
        border-bottom 1px solid #cccccc
        flex-grow 4
  .change-button
    text-align center
    margin 0 1.5rem
    margin-top .6rem
    height .6rem
    line-height .6rem
    background-color $bgColor
    color #ffffff
    border-radius .14rem

</style>
