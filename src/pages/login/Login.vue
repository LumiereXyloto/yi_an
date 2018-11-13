<template>
  <div class="wrapper">
    <div class="header-info">
      <div class="info">帮助</div>
      <router-link to="/register">
        <div class="info">注册</div>
      </router-link>
    </div>
    <div class="logo-wrapper">
      <img class="logo" src="@/assets/images/logo.png" alt="gg">
    </div>
    <div class="input-wrapper">
      <input class="input" type="text" placeholder="用户名" v-model="list.uid">
      <input class="input" type="password" placeholder="请填写密码" v-model="list.psw">
    </div>
    <div class="login-button" @click="sendInfo">登录</div>
    <div class="footer-info">
      <span>登录即同意</span>
      <span class="color-text">《易安兼职使用协议》</span>
      <span>&</span>
      <span class="color-text">《隐私权条款》</span>
    </div>
    <div class="footer-info">
      <span>还没账号？</span>
      <router-link to="/register">
        <span class="color-text">注册</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      list: {
        uid: '',
        psw: ''
      }
    }
  },
  methods: {
    sendInfo () {
      console.log(this.list.uid)
      console.log(this.list.psw)
      axios.post('http://equator8848.xyz:8848/yian/account/userLogin.do', qs.stringify({
      // axios.post('http://jmblog.3w.dkys.org/yian/account/userLogin.do', qs.stringify({
        uid: this.list.uid,
        psw: this.list.psw
      }))
        .then(this.sendInfoSucc)
    },
    sendInfoSucc (res) {
      const error = res.data.msg
      if (res.data.msg === '2') {
        this.$layer.msg('登录成功', () => {
          console.log(res.data.msg)// 两秒后执行
        })
        this.$router.replace('/')
      } else if (res.data.msg === '1') {
        this.$layer.msg('登录成功', () => {
          console.log(res.data.msg)
        })
        this.$router.replace('/')
      } else {
        this.$layer.msg('登录失败', () => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  input::-webkit-input-placeholder{
    color:#A5A5A5;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#A5A5A5;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#A5A5A5;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#A5A5A5;
  }
  .header-info
    display: flex
    justify-content: flex-end
    .info
      margin .2rem
  .logo-wrapper
    display: flex
    justify-content: center
    margin-top: 1rem
    .logo
      width: 1.5rem
      height: 1.5rem
  .input-wrapper
    display: flex
    flex-direction: column
    .input
      border-bottom: .02rem solid #CECECE
      padding: .2rem
      margin: .4rem
      margin-top: .6rem
  .login-button
    margin: .4rem
    margin-top: .6rem
    color: #ffffff
    background-color #409Eff
    height .8rem
    line-height .8rem
    text-align center
    border-radius .1rem
  .footer-info
    display flex
    justify-content center
    margin-top 1rem
    font-size .12rem
    .color-text
      color #409Eff
</style>
