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

Vue.use(VueRouter)

function authValidation(to, from, next) {
  console.log(store.state.currUser)
  if (store.state.currUser.id == undefined) {
    next('Login')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'dashBoard',
    component: DashBoard,
    beforeEnter: authValidation
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/leaderBoard',
    name: 'leaderBoard',
    component: LeaderBoard
  },
  {
    path: '/rewards',
    name: 'rewards',
    component: Rewards
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
