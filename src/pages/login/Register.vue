<template>
  <div class="wrapper">
    <div class="header-info">
      易安注册
    </div>
    <div class="logo-wrapper">
      <img class="logo" src="@/assets/images/logo.png" alt="gg">
    </div>
    <div class="input-wrapper">
      <input class="input" type="text" placeholder="输入邮箱地址作为账号">
      <input class="input" type="password" placeholder="请设置密码">
      <input class="input" type="password" placeholder="请确认密码">
      <div class="code-wrapper">
        <input class="input code-input" type="text" placeholder="请输入验证码">
        <span class="code">点击获取验证码</span>
      </div>
    </div>
    <div class="login-button">注册</div>
    <div class="footer-info">
      <span>注册即同意</span>
      <span class="color-text">《易安兼职使用协议》</span>
      <span>&</span>
      <span class="color-text">《隐私权条款》</span>
    </div>
    <div class="footer-info">
      <span>已有账号？</span>
      <router-link to="/login">
        <span class="color-text underline-text">登录</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  method: {
    sendInfo () {
      axios.post('http://equator8848.xyz:8848/yian/account/register.do', {
        uid: this.uid,
        psw: this.psw,
        authCode: this.code,
        userType: this.type
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
    padding .2rem 0
    background-color #409Eff
    text-align center
    color #ffffff
    font-size .3rem
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
      margin-top: .2rem
    .code-wrapper
      display flex
      .code
        color #409Eff
        text-decoration underline
        flex-grow 1
        text-align center
        padding-top 1.6em
        padding-right .2rem
      .code-input
        flex-grow 3
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
    .underline-text
      text-decoration underline
</style>
