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
    <div class="login-button">登录</div>
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
      axios.post('http://equator8848.xyz:8848/yian/account/userLogin.do', {
        uid: this.uid,
        psd: this.psd
      })
        .then(this.sendInfoSucc)
    },
    sendInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
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
