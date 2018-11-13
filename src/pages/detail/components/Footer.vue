<template>
  <div class="position-wrapper">
    <div class="flex-wrapper">
      <div class="star" ref="star" @click="star">收藏</div>
      <div class="sign-up" @click="signUp">{{isSignText}}</div>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/eventBus.js'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Footer',
  data () {
    return {
      params: {
        merchantId: '',
        jobId: '',
        isSign: ''
      },
      isSignText: '',
      isStar: false
    }
  },
  created () {
    bus.$on('emitParams', (merchant, job, isSign) => {
      this.params.merchantId = merchant
      this.params.jobId = job
      this.params.isSign = isSign
      console.log(this.params, this.params.isSign)
      if (this.params.isSign === '0') {
        this.isSignText = '立即报名'
      } else if (this.params.isSign === '1') {
        this.isSignText = '已报名'
      }
    })
  },
  methods: {
    signUp () {
      let _this = this
      this.$layer.open({
        btn: ['确认', '取消'],
        content: '确认报名？',
        className: 'good luck1',
        shade: true,
        shadeClose: false,
        success (layer) {
          console.log('layer id is:', layer.id)
        },
        yes (index, $layer) {
          console.log('确定')
          // 函数返回 false 可以阻止弹层自动关闭，需要手动关闭
          // return false
          _this.$layer.closeAll()
          axios.post('http://yian.our16.top:8080/yian/parttimeHall/applyParttime.do', qs.stringify({
            jobId: _this.params.jobId,
            merchantId: _this.params.merchantId
          }))
            .then((res) => {
              console.log(res)
            })
        },
        no (index, $layer) {
          _this.$layer.closeAll()
          console.log('取消')
        },
        end () {
          console.log('layer end')
        }
      })
    },
    star () {
      this.isStar = !this.isStar
      if (this.isStar === true) {
        this.$layer.closeAll()
        this.$refs.star.innerText = '取消收藏'
        this.$layer.msg('收藏成功')
      } else if (this.isStar === false) {
        this.$layer.closeAll()
        this.$refs.star.innerText = '收藏'
        this.$layer.msg('取消成功')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .position-wrapper
    position fixed
    bottom 0
    width 100%
    .flex-wrapper
      display flex
      height $headerHeight
      line-height $headerHeight
      .star
        width 50%
        height $headerHeight
        line-height $headerHeight
        color $bgColor
        border-top 1px solid #E8E8E8
        border-bottom 1px solid #E8E8E8
        flex-grow 1
        text-align center
        background-color #ffffff
      .sign-up
        width 50%
        height $headerHeight
        line-height $headerHeight
        background-color $bgColor
        color #ffffff
        border-top 1px solid $bgColor
        border-bottom 1px solid $bgColor
        flex-grow 1
        text-align center
</style>
