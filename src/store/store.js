import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

const url = "http://localhost:3000"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        currUser: {},
        rewards: {
            icons: []
        }
    },
    mutations: {
        onLoadCurrUser(state, data) {
            state.currUser = data.user
            console.log(state.currUser)
        },
        onLoadIcons(state, data) {
            state.rewards.icons = data
            console.log(state.rewards.icons)
        }

    },
    actions: {
        async register(state, req) {
            const res = await axios.post(url + '/register', req)
            return res.data
        },
        async login(state, req) {
            const res = await axios.post(url + '/login', req)
            state.currUser = res.data.currUser
            return res.data
        },
        async loadIcons(context, onLoad) {
            const res = await axios.get(url + '/icons')
            this.commit('onLoadIcons', res.data)
        },
        async loadCurrUser(context, onLoad) {
            const res = await axios.get(url + '/user')
            this.commit('onLoadCurrUser', res.data)
        },
    }
}) 