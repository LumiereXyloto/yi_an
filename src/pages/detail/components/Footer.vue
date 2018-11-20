<template>
  <div class="position-wrapper">
    <div class="flex-wrapper">
      <div class="star" ref="star" @click="star">收藏</div>
      <div class="sign-up" @click="checkSignUp">{{isSignText}}</div>
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
      console.log('status', this.params.isSign)
      if (this.params.isSign === '0') {
        console.log('现在是未报名状态')
        this.isSignText = '立即报名'
      } else if (this.params.isSign === '1') {
        console.log('现在是已报名状态')
        this.isSignText = '已报名'
      }
    })
  },
  beforeDestroy () {
    bus.$off()
  },
  methods: {
    checkSignUp () {
      if (this.params.isSign === '0') {
        this.signUp()
      } else if (this.params.isSign === '1') {
        this.cancelSignUp()
      }
    },
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
          console.log('点击确定')
          // 函数返回 false 可以阻止弹层自动关闭，需要手动关闭
          // return false
          _this.$layer.closeAll()
          axios.post('http://yian.our16.top:8080/yian/parttimeHall/applyParttime.do', qs.stringify({
            jobId: _this.params.jobId,
            merchantId: _this.params.merchantId
          }), {
            withCredentials: true
          })
            .then((res) => {
              console.log('报名是否成功', res.data.status)
              if (res.data.status === 1) {
                _this.params.isSign = '1'
                _this.isSignText = '已报名'
                _this.$layer.closeAll()
                _this.$layer.msg('报名成功')
                bus.$emit('addNum', 1)
              } else {
                _this.$layer.closeAll()
                _this.$layer.msg('报名出现error')
              }
            })
            .catch(() => {
              _this.$layer.closeAll()
              _this.$layer.msg('报名出现error')
            })
        },
        no (index, $layer) {
          _this.$layer.closeAll()
          console.log('点击取消')
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
    },
    cancelSignUp () {
      let _this = this
      this.$layer.open({
        btn: ['确认', '取消'],
        content: '取消报名？',
        className: 'good luck1',
        shade: true,
        shadeClose: false,
        yes (index, $layer) {
          console.log('点击确定')
          // 函数返回 false 可以阻止弹层自动关闭，需要手动关闭
          // return false
          _this.$layer.closeAll()
          axios.post('http://yian.our16.top:8080/yian/parttimeHall/cancelParttime.do', qs.stringify({
            jobId: _this.params.jobId
          }), {
            withCredentials: true
          })
            .then((res) => {
              console.log('取消是否成功', res.data.status)
              if (res.data.status === 1) {
                _this.params.isSign = '0'
                _this.isSignText = '立即报名'
                _this.$layer.closeAll()
                _this.$layer.msg('取消成功')
                bus.$emit('delNum', 1)
              } else {
                console.log('取消报名出现error')
              }
            })
        },
        no (index, $layer) {
          _this.$layer.closeAll()
          console.log('点击取消')
        }
      })
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
