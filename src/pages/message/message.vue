<template>
  <div>
    <message-header :title="title" :backFlag="false"></message-header>
    <img src="/static/images/banner.png" class="banner">
    <message-list></message-list>
  </div>
</template>

<script>
import MessageHeader from './header'
import MessageList from './message-list'
export default {
  name: 'Message',
  components: {
    MessageHeader,
    MessageList
  },
  data () {
    return {
      title: '我的消息'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .banner
    display block
    width 100%
    margin-top $headerHeight
</style>
