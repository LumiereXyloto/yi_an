<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <div>
          <tab v-if="tabType"></tab>
          <router-view class="child-view"/>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Tab from '@/pages/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  },
  data () {
    return {
      transitionName: 'slide-left',
      tabType: false
    }
  },
  mounted () {
    this.checkTabType()
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
      } else if (to.path === '/' && from.path === '/login') {
        this.transitionName = 'slide-left'
      } else if (to.path === '/user' && from.path === '/') {
        this.transitionName = 'slide-left'
      } else if (to.path === '/person' && from.path === '/change') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/user') {
        this.transitionName = 'slide-right'
      } else if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      if (to.path === '/merchant') {
        this.transitionName = 'slide-right'
      }
      if (to.path === '/merchant' && from.path === '/merchant/info') {
        this.transitionName = 'slide-right'
      }
      if (to.path === '/merchant/info' && from.path === '/merchant/changeinfo') {
        this.transitionName = 'slide-right'
      }
      if (to.path === '/merchant/info' && from.path === '/merchant/changepsw') {
        this.transitionName = 'slide-right'
      }
      if (to.path === '/publish' && from.path === '/merchant') {
        this.transitionName = 'slide-right'
      }
      if (to.path === '/merchant' && from.path === '/publish') {
        this.transitionName = 'slide-left'
      }
      if (from.path === '/merchant/getlist') {
        this.transitionName = 'slide-right'
      }
    },
    $route (e) {
      if (e.name === 'Home') {
        this.tabType = true
      } else if (e.name === 'Message') {
        this.tabType = true
      } else if (e.name === 'User') {
        this.tabType = true
      } else {
        this.tabType = false
      }
    }
  },
  methods: {
    checkTabType () {
      if (this.$route.name === 'Home') {
        this.tabType = true
      } else if (this.$route.name === 'Message') {
        this.tabType = true
      } else if (this.$route.name === 'User') {
        this.tabType = true
      } else {
        this.tabType = false
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
