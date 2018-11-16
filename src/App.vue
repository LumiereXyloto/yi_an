<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view class="child-view"/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  mounted () {
  },
  // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    '$route' (to, from) {
      if (to.path === '/user' && from.path === '/sign') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/user' && from.path === '/star') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/user' && from.path === '/info') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/user' && from.path === '/person') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/' && from.path === '/logon') {
        this.transitionName = 'slide-left'
      } else if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style>
  .child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
