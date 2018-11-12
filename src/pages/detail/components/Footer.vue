<template>
  <div class="position-wrapper">
    <div class="flex-wrapper">
      <div class="star">收藏</div>
      <div class="sign-up" @click="signUp">{{isSignText}}</div>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/eventBus.js'
export default {
  name: 'Footer',
  data () {
    return {
      params: {
        merchantId: '',
        jobId: '',
        isSign: ''
      },
      isSignText: ''
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
      // this.$layer.dialog({
      //   title: ['确认报名？', 'background:#ffffff;'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
      //   // content: '这是内容',
      //   contentClass: 'className',
      //   btn: ['确定', '取消'],
      //   shadeClose: false
      //   //   time: 2000
      // })
      // // 如果有btn
      //   .then(function (res) {
      //     // res为0时是用户点击了左边  为1时用户点击了右边
      //     if (res === 0) {

      //     }
      //     let position = res === 0 ? 'left' : 'right'
      //     console.log(position)
      //   })
      this.$layer.open({
        btn: ['确认', '取消'],
        content: 'hello word',
        className: 'good luck1',
        shade:true,
        success(layer) {
          console.log('layer id is:',layer.id)
        },
        yes(index, $layer) {
          console.log(arguments)
          // 函数返回 false 可以阻止弹层自动关闭，需要手动关闭
          // return false;
        },
        end() {
          console.log('end')
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
