import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from "../store/store"

import DashBoard from '../views/DashBoard.vue'
import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import LeaderBoard from '../views/LeaderBoard.vue'
import Rewards from '../views/Rewards.vue'
import Tutorial from '../views/Tutorial.vue'
import SignUp from '../views/SignUp.vue'
import ProfileSettings from '../views/ProfileSettings.vue'

Vue.use(VueRouter)

async function authValidation(to, from, next) {
  await store.dispatch("loadCurrUser");

  if (to.name == "game" && window.browser.mobile == true) {
    next('/')
  }
  else if (store.state.currUser == null) {
    next('Login')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'dashBoard',
    component: DashBoard,
    beforeEnter: authValidation
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    beforeEnter: authValidation

  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: LeaderBoard,
    beforeEnter: authValidation

  },
  {
    path: '/rewards',
    name: 'rewards',
    component: Rewards,
    beforeEnter: authValidation

  },

  {
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial
  },
  {
    path: '/profileSetting',
    name: 'profileSetting',
    component: ProfileSettings,
    beforeEnter: authValidation
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
