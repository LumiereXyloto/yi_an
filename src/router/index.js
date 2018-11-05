import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Detail from '@/pages/detail/Detail.vue'
import Login from '@/pages/login/Login.vue'
import Register from '@/pages/login/Register.vue'
import User from '@/pages/users/User.vue'
import Sign from '@/pages/users/components/Sign'
import Star from '@/pages/users/components/Star'
import Info from '@/pages/users/components/Info'
import Person from '@/pages/users/components/Person'
import Change from '@/pages/users/components/Change'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/sign',
    name: 'Sign',
    component: Sign
  }, {
    path: '/star',
    name: 'Star',
    component: Star
  }, {
    path: '/info',
    name: 'Info',
    component: Info
  }, {
    path: '/person',
    name: 'Person',
    component: Person
  }, {
    path: '/change',
    name: 'Change',
    component: Change
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
