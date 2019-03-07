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
      <div class="isRememberPsw">
        <span style="color:#A5A5A5;">记住密码</span>
        <input type="checkbox" value="1" v-model="isRememberPsw">
      </div>
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
import qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'Login',
  data () {
    return {
      list: {
        uid: '',
        psw: ''
      },
      isRememberPsw: ''
    }
  },
  methods: {
    sendInfo () {
      let email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g// eslint-disable-line
      if (this.list.uid === '' || this.list.psw === '') {
        this.$layer.closeAll()
        this.$layer.msg('账号/密码不能为空')
      } else if (email.test(this.list.uid)) {
        console.log(this.isRememberPsw)// 记住密码
        if (this.isRememberPsw) {
          this.savePsw()
        }
        axios.post('http://equator8848.xyz:8080/yian/account/userLogin.do', qs.stringify({
          uid: this.list.uid,
          psw: this.list.psw
        }))
          .then(this.sendInfoSucc)
      } else {
        this.$layer.closeAll()
        this.$layer.msg('账号有误')
      }
    },
    sendInfoSucc (res) {
      sessionStorage.setItem('uid', this.uid)
      if (res.data.msg === '2') {
        this.$layer.closeAll()
        this.$layer.msg('登录成功')
        console.log(res.data.msg, '商家')
        this.$router.replace('/merchant')
      } else if (res.data.msg === '1') {
        this.$layer.closeAll()
        this.$layer.msg('登录成功')
        console.log(res.data.msg, '学生')
        this.$router.replace('/index')
      } else {
        this.$layer.closeAll()
        this.$layer.msg('登录失败')
      }
    },
    savePsw () {
      console.log(1)
      window.localStorage.setItem('isSave', this.isRememberPsw)
      window.localStorage.setItem('uid', this.list.uid)
      window.localStorage.setItem('psw', this.list.psw)
    }
  },
  mounted () {
    this.isRememberPsw = window.localStorage.getItem('isSave')
    if (this.isRememberPsw) {
      this.list.uid = window.localStorage.getItem('uid')
      this.list.psw = window.localStorage.getItem('psw')
    } else {
      this.list.uid = ''
      this.list.psw = ''
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
    .isRememberPsw
      display flex
      justify-content center
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
    font-size .2rem
    .color-text
      color #409Eff
</style>
