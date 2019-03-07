<template>
  <div>
    <div class="title">我的发布</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.jobId"
        :to="'/mdetail/' + item.jobId"
      >
        <div class="item-img-wrapper">
          <img src="@/assets/images/logo.png" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-brief">{{item.jobSummary}}</p>
          <p class="item-time">{{item.jobType}}</p>
          <p class="item-time">{{item.jobTime}}</p>
          <div class="reward-and-num">
            <p class="item-reward">{{item.reward}}/{{item.rewardType}}</p>
            <p class="item-num">供需:{{item.nowNum}}/{{item.hireNum}}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'Published',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('http://equator8848.xyz:8080/yian/merchant/showBriefJobInfo.do')
      .then(res => {
        console.log(res)
        this.list = res.data.data
      })
  }
}
</script>

<style lang="stylus" scoped>
  .title
    background: #eeeeee
    line-height: .8rem
    text-indent: .4rem
  .item
    display flex
    .item-img-wrapper
      display flex
      justify-content center
      align-items center
      height 2.2rem
      .item-img
        width 1.2rem
        height 1.2rem
        padding .3rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-time
        ellipsis()
        color #ADADAD
        padding .1rem 0
      .item-brief
        ellipsis()
        font-size .36rem
        padding .1rem 0
      .reward-and-num
        display flex
        justify-content space-between
        padding-right .8rem
        .item-reward
          color #FE7418
          font-size .32rem
          padding .1rem 0
        .item-num
          color #ADADAD
          font-size .3rem
          padding .1rem 0
</style>
