import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import config from "../utils/config"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        currUser: null,
        rewards: {
            icons: []
        }
    },
    mutations: {
        onLoadCurrUser(state, data) {
            state.currUser = data
        },

        onLoadIcons(state, data) {
            state.rewards.icons = data
        }

    },
    actions: {
        async register(context, req) {
            const res = await axios.post('/api/register', req)
            return res.data
        },
        async login(context, req) {
            const userRes = await axios.post('/api/login', req)
            let currUser = userRes.data.currUser
            console.log(userRes.data)
            if (!userRes.data.loggedIn)
                return userRes.data

            const userIconRes = await axios.get('/api/icon/' + currUser.icon)
            currUser.iconObj = userIconRes.data
            this.commit('onLoadCurrUser', currUser)
            return userRes.data
        },
        async loadIcons(context) {
            const res = await axios.get('/api/icons')
            this.commit('onLoadIcons', res.data)
        },
        async loadCurrUser(context) {
            const userRes = await axios.get('/api/user')
            if (!userRes.data.loggedIn)
                return
            let currUser = userRes.data.currUser
            const userIconRes = await axios.get('/api/icon/' + currUser.icon)
            currUser.iconObj = userIconRes.data
            this.commit('onLoadCurrUser', currUser)
        },
    }
})
