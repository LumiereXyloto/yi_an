<template>
  <div>
    <div class="user-info">
      <div class="info-item">{{infoList.school}}</div>
      <div class="info-item">{{infoList.studentName}}</div>
    </div>
    <div class="icon-img">
      <router-link class="img" tag="img" :src="imgs.signUrl" to="/sign"></router-link>
      <router-link class="img" tag="img" :src="imgs.starUrl" to="/star"></router-link>
      <router-link class="img" tag="img" :src="imgs.infoUrl" to="/message"></router-link>
      <router-link class="img" tag="img" :src="imgs.userUrl" to="/person"></router-link>
      <!-- <img class="img" src="@/assets/images/signup.png" alt="gg">
      <img class="img" src="@/assets/images/star.png" alt="gg">
      <img class="img" src="@/assets/images/info.png" alt="gg">
      <img class="img" src="@/assets/images/user.png" alt="gg"> -->
    </div>
    <div class="icon-text">
      <router-link to="/sign">
        <div>已经报名</div>
      </router-link>
      <router-link to="/star">
        <div>我的关注</div>
      </router-link>
      <router-link to="/message">
        <div>我的消息</div>
      </router-link>
      <router-link to="/person">
        <div>个人资料</div>
      </router-link>
    </div>

    <div class="block-title">已经报名({{length}})</div>
    <div class="showBlock">
      <ul>
        <router-link
          tag="li"
          v-for="item of signList"
          :key="item.jobId"
          :to="'/detail/' + item.jobId"
        >
          <div>
            <p class="item-title">{{item.title}}</p>
            <p class="item-detail">{{item.jobDetail}}</p>
            <p class="item-status">报名状态：{{item.status}}</p>
            <p class="item-time">报名时间：{{item.signTime}}</p>
          </div>
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'name',
  data () {
    return {
      infoList: {
        school: '',
        studentName: ''
      },
      signList: [],
      name: '',
      school: '',
      status: '',
      length: '',
      imgs: {
        signUrl: './static/images/signup.png',
        starUrl: './static/images/star.png',
        infoUrl: './static/images/info.png',
        userUrl: './static/images/user.png'
      }
    }
  },
  mounted () {
    axios.post('http://equator8848.xyz:8080/yian/student/getPersonalInfor.do')
      .then(res => {
        console.log(res.data.data)
        this.infoList = res.data.data
      })
    axios.post('http://equator8848.xyz:8080/yian/student/getSignUpParttime.do')
      .then(res => {
        if (res.data.data) {
          console.log(res.data.data)
          this.signList = res.data.data
          this.length = res.data.data.length
        } else {
          this.length = 0
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
  .user-info
    display flex
    justify-content center
    padding-top 1.2rem
    background-color #fff
    height .28rem
    .info-item
      margin 0 .1rem
      font-size .28rem
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
  .block-title
    background-color #EEEEEE
    font-size .28rem
    height .8rem
    line-height .8rem
    margin-bottom .2rem
    padding 0 .2rem
  .showBlock
    padding 0 .4rem
    .item-title
      font-size .34rem
      margin-bottom .1rem
      margin-top .2rem
    .item-detail
      color #919191
      font-size .26rem
      margin-bottom .1rem
    .item-status
      color #919191
      font-size .28rem
      margin-top .1rem
    .item-time
      color #919191
      font-size .28rem
      margin-top .1rem
      border-bottom 1px solid #eeeeee
      padding-bottom .1rem
</style>
