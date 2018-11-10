<template>
  <div>
    <div class="recommend-title">兼职推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img src="@/assets/images/logo.png" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-brief">{{item.title}}</p>
          <p class="item-time">{{item.brief}}</p>
          <div class="reward-and-num">
            <p class="item-reward">{{item.reward}}</p>
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
      list: [{
        id: '0001',
        title: '15栋超市兼职',
        brief: 'time',
        hireNum: '5',
        nowNum: '2',
        status: 'isSign',
        reward: '20/h'
      }, {
        id: '0002',
        title: '大茶杯奶茶销售员兼职',
        brief: 'time',
        hireNum: '4',
        nowNum: '3',
        status: 'notSign',
        reward: '80/天'
      }]
    }
  },
  methods: {
    sendRequest () {
      axios.post('http://jmblog.3w.dkys.org/yian/parttimeHall/allParttime.do', {
        pageNum: '1',
        onePageNum: '2'
      })
    },
    sendRequestSucc (res) {
      console.log(res)
    }
  },
  created () {
    this.sendRequest()
      .then(this.sendRequestSucc)
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
      height 1.8rem
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
