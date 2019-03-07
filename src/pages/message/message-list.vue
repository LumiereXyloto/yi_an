<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in list"
        class="border-bottom"
        :class="{move:candelete.id==item.id}"
        @touchstart="touchStart(item)"
        @touchend="touchEnd(item)"
        :key="index"
        @click="selectItem(item)"
      >
        <span class="title">{{item.title}}</span>
        <span class="pushTime">{{item.pushTime}}</span>
        <div class="isRead">标为已读</div>
        <div class="del" @click.stop="deleteItem(index, item)">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'MessageList',
  data () {
    return {
      // 数据
      list: [{
        id: 1,
        title: '您被拒绝报名兼职',
        pushTime: '2019-02-18 17:30:04',
        isRead: ''
      }],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    }
  },
  methods: {
    getMessageList () {
      console.log(111)
      axios.post('http://equator8848.xyz:8080/yian/message/getMessageTitleList.do', qs.stringify({
        page: '1'
      }), {
        withCredentials: true
      })
        .then((res) => {
          this.normalizeList(res)
        })
    },
    normalizeList (res) {
      let ret = []
      let list = res.data.data.list
      for (let item in list) {
        let obj = {}
        obj.id = parseInt(item) + 1
        obj.title = list[item].msgTitle
        obj.pushTime = list[item].pushTime
        obj.isRead = list[item].isRead
        obj.messageId = list[item].messageId
        ret.push(obj)
      }
      this.list = ret
    },
    deleteItem (index, item) {
      axios.post('http://equator8848.xyz:8080/yian/message/delMessage.do', qs.stringify({
        messageId: item.messageId
      }))
        .then((res) => {
          console.log(res)
          if (res.data.status === 1) {
            this.list.splice(index, 1)
            // 删除数组某条数据，或者向某个位置添加数据
          }
        })
    },
    touchStart (item) {
      let touchs = event.changedTouches[0]
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX
      this.candelete = {}
    },
    touchEnd (item) {
      let touchs = event.changedTouches[0]
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX
      this.candelete = {}
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 && Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault()
        this.candelete = item
      } else if (
        this.clientNum.x2 > this.clientNum.x1 && Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault()
        this.candelete = {}
      }
    },
    selectItem (item) {
      this.$router.push(`/message/${item.messageId}`)
    }
  },
  mounted () {
    this.getMessageList()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
  li{
    background #fdfdfd
    line-height .86rem
    position relative
    transform translateX(0)
    transition all .3s /*滑动效果更生动*/
    padding-left .2rem
  }
  ul{
    overflow-x hidden /*隐藏ul x轴的滚动条*/
  }
  li.move {
    transform translateX(-2.4rem) /*滑动后x轴位移-60px,使其可见*/
  }
  .title
    display inline-block
    max-width 50%
    ellipsis()
    vertical-align: bottom /*解决overflow hidden和inline-block同时出现造成的高度变化问题*/
  .pushTime
    position absolute
    right .2rem
  .isRead {
    position absolute
    top 0
    right -1px
    z-index: 3
    width 1.4rem
    height .86rem
    text-align center
    color #ffffff
    background-color #F1AE42
    transform translateX(1.4rem) /*默认x轴位移60px，使其隐藏*/
  }
  .del {
    position absolute
    top 0
    right -1px
    z-index: 3
    width 1rem
    height .86rem
    text-align center
    color #ffffff
    background-color #ff5b45
    transform translateX(2.4rem) /*默认x轴位移60px，使其隐藏*/
  }
</style>
