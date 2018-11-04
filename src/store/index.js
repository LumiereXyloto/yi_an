import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '重庆'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: { // 如果不是异步操作和批量同步，可以省略Actions
    changeCity (ctx, city) { // cts是上下文
      ctx.commit('changeStateCity', city)
    }
  },
  mutations: {
    changeStateCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
