// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fasClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import ele from 'element-ui'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue2-layer-mobile'

Vue.use(layer)
Vue.config.productionTip = false
fasClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(ele)

// 路由守卫，检测是否已经登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) { // 如果前往页面需要登录
    if (sessionStorage.getItem('uid') == null) { // 未登录
      next('/login') // 跳转到登录界面
    } else { // 已登录
      next()
    }
  } else { // 前往页面不需要登录
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
