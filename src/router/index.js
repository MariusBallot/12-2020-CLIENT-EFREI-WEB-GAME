import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import LeaderBoard from '../views/LeaderBoard.vue'
import Rewards from '../views/Rewards.vue'
import Tutorial from '../views/Tutorial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/LeaderBoard',
    name: 'LeaderBoard',
    component: LeaderBoard
  },
  {
    path: '/Rewards',
    name: 'Rewards',
    component: Rewards
  },
  {
    path: '/Tutorial',
    name: 'Tutorial',
    component: Tutorial
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
