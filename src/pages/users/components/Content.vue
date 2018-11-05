<template>
  <div>
    <div class="user-info">
      <div class="info-item">重庆邮电大学</div>
      <div class="info-item">李博文</div>
    </div>
    <div class="icon-img">
      <img class="img" src="@/assets/images/signup.png" alt="gg">
      <img class="img" src="@/assets/images/star.png" alt="gg">
      <img class="img" src="@/assets/images/info.png" alt="gg">
      <img class="img" src="@/assets/images/user.png" alt="gg">
    </div>
    <div class="icon-text">
      <router-link to="/sign">
        <div>已经报名</div>
      </router-link>
      <router-link to="/star">
        <div>我的收藏</div>
      </router-link>
      <router-link to="/info">
        <div>我的消息</div>
      </router-link>
      <router-link to="/person">
        <div>个人资料</div>
      </router-link>
    </div>
    <div class="show-block">
      <div class="title">已经报名(3)</div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <div class="item-status">报名状态</div>
        <hr>
      </div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <div class="item-status">报名状态</div>
        <hr>
      </div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <div class="item-status">报名状态</div>
        <hr>
      </div>
    </div>
    <div class="show-block">
      <div class="title">我的收藏(2)</div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <div class="item-status">报名状态</div>
        <hr>
      </div>
      <div class="content-wrapper">
        <div class="item-title">15栋超市兼职</div>
        <div class="item-detail">这是详情这是详情这是详情</div>
        <div class="item-status">报名状态</div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name'
}
</script>

<style lang="stylus" scoped>
  .user-info
    display flex
    justify-content center
    padding-top 1.2rem
    background-color #fff
    .info-item
      margin 0 .1rem
      font-size .2rem
  .icon-img
    display flex
    justify-content space-around
    padding-top .8rem
    background-color #fff
    .img
      display block
      width 9%
      height 9%
  .icon-text
    display flex
    justify-content space-around
    padding-top .2rem
    padding-bottom .8rem
    background-color #fff
  .show-block
    background-color #fff
    .title
      margin-top .4rem
      padding .1rem .2rem
      border-bottom 1px solid #D7D7D7
    .content-wrapper
      padding .1rem .4rem
      .item-title
        font-size .3rem
        padding-top .1rem
      .item-detail
        font-size .24rem
        padding-top .1rem
      .item-status
        font-size .28rem
        padding-top .1rem
</style>
