<template>
  <div>
    <div class="recommend-title">兼职推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.jobId"
        :to="'/detail/' + item.jobId"
      >
        <div class="item-img-wrapper">
          <img src="@/assets/images/logo.png" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-brief">{{item.brief}}</p>
          <p class="item-time">{{item.location}}</p>
          <p class="item-time">{{item.time}}</p>
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
import qs from 'qs'
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: []
    }
  },
  methods: {
    sendRequest () {
      axios.post('http://yian.our16.top:8080/yian/parttimeHall/allParttime.do', qs.stringify({
        pageNum: '0',
        onePageNum: '0'
      }))
        .then(this.sendRequestSucc)
    },
    sendRequestSucc (res) {
      console.log(res)
      this.list = res.data.data
    }
  },
  created () {
    this.sendRequest()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  @import '~@/assets/styles/varibles.styl'
  .recommend-title
    margin-top: .2rem
    background: #eeeeee
    line-height: .8rem
    text-indent: .2rem
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
