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
import Merchant from '@/pages/merchant/Merchant'
import Publish from '@/pages/merchant/components/Publish'
import MerchantInfo from '@/pages/merchant/components/Info'
import MDetail from '@/pages/merchant/components/MDetail'
import ChangeInfo from '@/pages/merchant/components/ChangeInfo'
import ChangePsw from '@/pages/merchant/components/ChangePsw'
import GetList from '@/pages/merchant/components/GetList'
import Message from '@/pages/message/message'
import MessageDetail from '@/pages/message-detail/message-detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/index',
    name: 'Home',
    component: Home,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/detail/:jobId',
    name: 'Detail',
    component: Detail,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/mdetail/:jobId',
    name: 'MDetail',
    component: MDetail,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/sign',
    name: 'Sign',
    component: Sign,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/star',
    name: 'Star',
    component: Star,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/info',
    name: 'Info',
    component: Info,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/person',
    name: 'Person',
    component: Person,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/change',
    name: 'Change',
    component: Change,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/merchant',
    name: 'Merchant',
    component: Merchant,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/publish',
    name: 'Publish',
    component: Publish,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/merchant/info',
    name: 'MerchantInfo',
    component: MerchantInfo,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/merchant/changeinfo',
    name: 'changeInfo',
    component: ChangeInfo,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/merchant/changepsw',
    name: 'changePsw',
    component: ChangePsw,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/merchant/getlist',
    name: 'GetList',
    component: GetList,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      requireLogin: true
    }
  }, {
    path: '/message/:messageId',
    name: 'MessageDetail',
    component: MessageDetail,
    meta: {
      requireLogin: true
    }
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
