// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fasClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import ele from 'element-ui'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import layer2 from 'vue2-layer-mobile'
Vue.use(layer2)
Vue.use(layer)
Vue.config.productionTip = false
fasClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(ele)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
