<template>
  <div class="tab-wrapper">
    <div class="tab border-top">
      <router-link tag="div" class="tab-item" to="/index">
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/message">
        <span class="tab-link">消息</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/user">
        <span class="tab-link">个人中心</span>
      </router-link>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/assets/styles/varibles"
  .tab-wrapper
    position fixed
    bottom 0
    width 100%
    z-index 5
    .tab
      display: flex
      height: .88rem
      line-height: .88rem
      font-size: $font-size-medium
      background-color #ffffff
      .tab-item
        flex: 1
        text-align: center
        .tab-link
          padding-bottom: 5px
        // &为stylus提供的父选择器
        &.router-link-active
          .tab-link
            color: $color-theme
            border-bottom: 2px solid $color-theme
</style>
