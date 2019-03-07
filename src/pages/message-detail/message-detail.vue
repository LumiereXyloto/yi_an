<template>
  <transition name="slide">
    <div class="wrapper">
      <message-detail-header :title="title"></message-detail-header>
      <div class="row-wrapper">
        <div class="row-title">消息标题</div>
        <div class="row-content">{{msgTitle}}</div>
      </div>
      <div class="row-wrapper">
        <div class="row-title">推送时间</div>
        <div class="row-content">{{pushTime}}</div>
      </div>
      <div class="row-wrapper">
        <div class="row-title">消息详情</div>
        <div class="row-content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import MessageDetailHeader from '@/pages/message/header'
export default {
  name: 'MessageDetail',
  components: {
    MessageDetailHeader
  },
  data () {
    return {
      title: '消息详情',
      msgTitle: '',
      pushTime: '',
      content: ''
    }
  },
  methods: {
    getMessageDetail () {
      axios.post('http://equator8848.xyz:8080/yian/message/getMessage.do', qs.stringify({
        messageId: this.$route.params.messageId
      }))
        .then((res) => {
          console.log(res)
          this.getDetailsucc(res)
        })
    },
    getDetailsucc (res) {
      this.content = res.data.data.content
      this.msgTitle = res.data.data.msgTitle
      this.pushTime = res.data.data.pushTime
    }
  },
  mounted () {
    this.getMessageDetail()
  }
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .wrapper
    margin .9rem 0 0
    .row-wrapper
      margin-top .5rem
      .row-title
        margin-top: .2rem
        background: #eeeeee
        line-height: .7rem
        text-indent: .2rem
      .row-content
        font-size .28rem
        margin .2rem .2rem 0

</style>
