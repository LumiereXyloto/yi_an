<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id" @click="title=item.desc;typeStore=item.id;sendRequest()">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 根据兼职类型返回的列表 -->
      <div class="recommend-title">{{title}}</div>
      <ul>
        <transition-group class="fadeIn">
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
        </transition-group>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '1',
        imgUrl: './static/images/1.png',
        desc: '家教'
      }, {
        id: '2',
        imgUrl: './static/images/2.png',
        desc: '服务员'
      }, {
        id: '3',
        imgUrl: './static/images/3.png',
        desc: '接待员'
      }, {
        id: '4',
        imgUrl: './static/images/4.png',
        desc: '安保人员'
      }, {
        id: '5',
        imgUrl: './static/images/5.png',
        desc: '推广促销'
      }, {
        id: '6',
        imgUrl: './static/images/6.png',
        desc: '翻译'
      }, {
        id: '7',
        imgUrl: './static/images/7.png',
        desc: '话务员'
      }, {
        id: '8',
        imgUrl: './static/images/8.png',
        desc: '实习生'
      }, {
        id: '9',
        imgUrl: './static/images/9.png',
        desc: '收银员'
      }, {
        id: '0',
        imgUrl: './static/images/0.png',
        desc: '其它'
      }],
      title: '',
      list: [],
      typeStore: ''
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    sendRequest () {
      axios.post('http://yian.our16.top:8080/yian/parttimeHall/seekByParttimeType.do', qs.stringify({
        parttimeType: this.typeStore,
        pageNum: '0',
        onePageNum: '0'
      }), {
        withCredentials: true
      })
        .then(this.sendRequestSucc)
    },
    sendRequestSucc (res) {
      console.log(res)
      this.list = res.data.data
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons
    margin-top: .1rem
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
    overflow: hidden
    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0.4rem
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        right: 0
        left: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
  .fadeIn-enter-active, .fadeIn-leave-active {
    transition: opacity .5s;
  }
  .fadeIN-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
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
