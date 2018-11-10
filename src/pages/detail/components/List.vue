<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title">{{item.title}}</div>
      <div class="item-location">{{item.location}}</div>
      <div class="row-wrapper">
        <span class="grey">基本工资：</span>
        <span class="black">{{item.reward}}元/{{item.rewardType}}</span>
      </div>
      <div class="color-block"></div>
      <div class="row-wrapper">
        <span class="grey">兼职类型：</span>
        <span class="black">{{item.jobType}}</span>
      </div>
      <div class="row-wrapper">
        <span class="grey">招聘人数：</span>
        <span class="black">{{item.hireNum}}</span>
      </div>
      <div class="row-wrapper">
        <span class="grey">已聘人数：</span>
        <span class="black">{{item.nowNum}}</span>
      </div>
      <div class="color-block"></div>
      <div class="detail-title">工作内容：</div>
      <div class="detail">{{item.jobContent}}</div>
      <div class="tip">若发现实际工作内容与上述描述不符，请您提高警惕并第一时间向我们举报</div>
      <div class="color-block"></div>
      <div class="row-wrapper">
        <span class="grey">联系人：</span>
        <span class="black">{{item.merchantName}}</span>
      </div>
      <div class="row-wrapper">
        <span class="grey">联系方式：</span>
        <span class="black">{{item.merchantPhone}}</span>
      </div>
      <div class="warn border-bottom">(提示：凡收取费用的兼职，需谨慎 ! )</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'DetailList',
  // props: {
  //   list: Array
  // }
  data () {
    return {
      // list: [{
      //   time: '2018/11/07',
      //   title: '重邮街吧兼职',
      //   location: '15栋街吧奶茶店',
      //   rewardType: '小时',
      //   reward: '17',
      //   jobType: '临时工',
      //   hireNum: '2',
      //   nowNum: '1',
      //   merchantPhone: '18723287654',
      //   merchantId: '0001',
      //   merchantName: '李博文',
      //   isSignOrNot: '未报名',
      //   jobContent: '工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明工作内容说明'
      // }]
      list: []
    }
  },
  methods: {
    sendRequest () {
      axios.post('http://jmblog.3w.dkys.org/yian/parttimeHall/getParttimeDetail.do', qs.stringify({
        jobId: '145'
      }))
        .then(this.sendRequestSucc)
    },
    sendRequestSucc (res) {
      let result = res.data
      console.log(result)
      if(result.status == 1) {
        console.log(result.data)
        this.list.jobContent = result.data.details
        this.list.hireNum = result.data.hireNum
        this.list.nowNum = result.data.nowNum
        this.list.isSignOrNot = result.data.isSignOrNot
        this.list.location = result.data.location
        this.list.merchantId = result.data.merchantId
        this.list.merchantName = result.data.merchantName
        this.list.merchantPhone = result.data.merchantPhone
        this.list.rewardType = result.data.rewardType
        this.list.reward = result.data.reward
      }
    }
  },
  created () {
    this.sendRequest()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .item-title
    font-size .38rem
    padding .4rem .4rem
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
  .warn
    padding .1rem .4rem .3rem .4rem
    color #FF4040
</style>
